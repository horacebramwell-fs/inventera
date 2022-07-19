import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import ProductForm from '../../components/forms/products';
import ProductTable from '../../components/tables/product';
import { productData } from '../../formDefaults';
import { setCategories } from '../../redux/features/category/categorySlice';
import {
  setProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  reset,
} from '../../redux/features/product/productSlice';

export default function Products() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [formData, setFormData] = useState(productData);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { categories } = useSelector((state) => state.category);
  const { product, error, success, message, products } = useSelector(
    (state) => state.product,
  );
  const { user } = useSelector((state) => state.auth);

  const { token } = user;

  /* HANDLE SELECT */
  const handleSelect = (e, id) => {
    if (e.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((item) => item !== id));
    }
  };

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      materials: selectedMaterials,
    });
  };

  /* HANDLE EDIT */
  const handleEdit = () => {
    handleShow();

    setFormData({
      ...product,
      category: '',
      categoryId: product.categoryId,
    });
  };

  /* HANDLE UPDATE */
  const handleUpdate = () => {
    const id = selected[0];

    const data = {
      token,
      productId: id,
      product: {
        ...formData,
      },
    };

    dispatch(updateProduct(data));
  };

  /* HANDLE DELETE */
  const handleDelete = () => {
    const productsToDelete = [...selected];

    if (productsToDelete.length > 0) {
      productsToDelete.forEach((id) => {
        const data = {
          productId: id,
          token,
        };

        dispatch(deleteProduct(data));
      });

      setSelected([]);
    }
  };

  /* HANDLE CREATE */
  const handleCreate = () => {
    const data = {
      product: {
        ...formData,
      },
      token,
    };

    dispatch(createProduct(data));
  };

  /* HANDLE MATERIALS SELECT */
  const handleMaterialsSelect = (e) => {
    const selectedOptions = [...e.target.selectedOptions].map((o) => o.value);

    setSelectedMaterials(selectedOptions);
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const selectedProducts = [...selected];

      if (selectedProducts.length === 1) {
        handleUpdate();
      } else {
        handleCreate();
      }
    }
  };

  /* DISPLAYS ERROR & SUCCESS MESSAGES */
  useEffect(() => {
    if (error && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (success && message) {
      toast.success(message);
      dispatch(reset());
      handleClose();
    }
    // resets the form after modal is closed
    if (!show) {
      setFormData(productData);
      setValidated(false);
    }
  }, [error, success, message, show, dispatch]);

  /* SETS PRODUCT IF ONE IS SELECTED */
  useEffect(() => {
    if (selected.length === 1) {
      const id = selected[0];

      const prod = products.find((item) => item.id === id);

      dispatch(setProduct(prod));
    }
  }, [selected, product, dispatch, products]);

  /* PUSH NEW CATEGORIES TO REDUX */
  useEffect(() => {
    if (Object.keys(product).length > 0) {
      const cat = categories.find((item) => item.id === product.categoryId);

      if (!cat) {
        dispatch(setCategories(product.category));
      }
    }
  }, [categories, dispatch, product]);

  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader>
        <Container>
          <Row>
            <Col sm={6}>
              <h2>Products</h2>
            </Col>
            <Col sm={6} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                <span>Add Product</span>
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      {/* BUTTONS TO EDIT AND DELETE PRODUCTS */}
      <Container className="mt-3">
        {selected.length > 0 && (
          <ButtonGroup className="mt-3">
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            {selected.length === 1 && (
              <Button variant="outline-dark" onClick={handleEdit}>
                Edit
              </Button>
            )}
          </ButtonGroup>
        )}

        {/* TABLE OF PRODUCTS */}
        <ProductTable handleSelect={handleSelect} />

        {/* MODAL TO CREATE OR EDIT PRODUCT */}
        <SiteModal
          show={show}
          handleClose={handleClose}
          modalTitle={selected.length === 1 ? 'Edit Product' : 'Add Product'}
        >
          <ProductForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
            validated={validated}
            formData={formData}
            handleSelect={handleMaterialsSelect}
          />
        </SiteModal>
      </Container>
    </>
  );
}
