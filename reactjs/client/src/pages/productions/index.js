import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import ProductionModal from '../../components/productionModal';
import ProductionForm from '../../components/forms/productions';
import ProductionBoard from '../../components/cards/board';
import { productionData } from '../../formDefaults';
import {
  deleteProduction,
  updateProduction,
  createProduction,
  getProductionById,
  reset,
} from '../../redux/features/production/productionSlice';
import styles from './styles.module.css';

export default function Productions() {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState(productionData);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleView = () => setView(true);
  const handleCloseView = () => setView(false);

  const { user } = useSelector((state) => state.auth);
  const { boards } = useSelector((state) => state.board);
  const { productions, error, success, message } = useSelector(
    (state) => state.production,
  );

  const { token } = user;

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* HANDLE EDIT */
  const handleEdit = (id) => {
    const prod = productions.find((p) => p.id === id);

    setFormData({
      id,
      name: prod.name,
      dueDate: new Date(prod.dueDate).toISOString().substr(0, 10),
      productId: prod.productId,
      quantity: prod.quantity,
      unitId: prod.unitId,
      notes: prod.notes,
      status: prod.status,
    });

    handleShow();
  };

  /* HANDLE VIEW */
  const viewProduction = (id) => {
    handleView();

    const data = {
      token,
      id,
    };

    dispatch(getProductionById(data));
  };

  /* HANDLE UPDATE */
  const handleUpdate = () => {
    const { id } = formData;

    const data = {
      token,
      id,
      production: {
        ...formData,
        date: new Date().toISOString(),
        status: Number(formData.productionBoardId),
      },
    };
    dispatch(updateProduction(data));
  };

  /* HANDLE DELETE */
  const handleDelete = (id) => {
    const data = {
      token,
      id,
    };
    dispatch(deleteProduction(data));
  };

  /* HANDLE CREATE */
  const handleCreate = () => {
    const data = {
      token,
      production: {
        name: formData.name,
        dueDate: new Date(formData.dueDate).toISOString(),
        quantity: formData.quantity,
        notes: formData.notes,
        unitId: formData.unitId,
        productId: formData.productId,
        productionBoardId: formData.productionBoardId,
        status: Number(formData.productionBoardId),
      },
    };

    dispatch(createProduction(data));
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // check if production with the same id exists
      const productionExists = productions.find(
        (prod) => prod.id === formData.id,
      );

      if (productionExists) {
        handleUpdate();
      } else {
        handleCreate();
      }
    }
  };

  /* DISPLAY MESSAGES */
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
      setFormData(productionData);
      setValidated(false);
    }
  }, [error, success, message, dispatch, show]);

  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader>
        <Container>
          <Row>
            <Col sm={6}>
              <h2>Productions</h2>
            </Col>
            <Col sm={6} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Production
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      {/* PRODUCTION BOARD */}
      <Container className={styles.boards}>
        {boards &&
          boards.map((board) => (
            <ProductionBoard
              key={board.id}
              title={board.name}
              handleView={viewProduction}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              items={productions.filter((prod) => prod.status === board.status)}
            />
          ))}
      </Container>

      {/* FORM MODAL */}
      <SiteModal
        show={show}
        handleClose={handleClose}
        modalTitle={formData.id ? 'Edit Production' : 'Add Production'}
      >
        {/* FORM */}
        <ProductionForm
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          validated={validated}
        />
      </SiteModal>

      {/* PRODUCTION MODAL  */}
      <ProductionModal show={view} handleClose={handleCloseView} />
    </>
  );
}
