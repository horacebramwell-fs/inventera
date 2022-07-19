import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import FormulaForm from '../../components/forms/formulas';
import FormulaTable from '../../components/tables/formula';
import {
  updateFormula,
  deleteFormula,
  createFormula,
  setFormula,
  reset,
} from '../../redux/features/formula/formulaSlice';
import { formulaData } from '../../formDefaults';
import { formulaCalc } from '../../utils/formulaCalc';

export default function Formulas() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState(formulaData);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { formula, error, success, message, formulas } = useSelector(
    (state) => state.formula,
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
    });
  };

  /* HANDLE EDIT */
  const handleEdit = () => {
    handleShow();

    setFormData({
      ...formula,
    });
  };

  /* HANDLE UPDATE */
  const handleUpdate = () => {
    const id = selected[0];

    const { fragranceAmount, waxAmount } = formulaCalc(formData);

    const data = {
      token,
      formulaId: id,
      formula: {
        ...formData,
        fragranceAmount,
        waxAmount,
      },
    };

    dispatch(updateFormula(data));
  };

  /* HANDLE DELETE */
  const handleDelete = () => {
    const formulasToDelete = [...selected];

    if (formulasToDelete.length > 0) {
      formulasToDelete.forEach((id) => {
        const data = {
          formulaId: id,
          token,
        };

        dispatch(deleteFormula(data));
      });

      setSelected([]);
    }
  };

  /* HANDLE CREATE */
  const handleCreate = () => {
    const { fragranceAmount, waxAmount } = formulaCalc(formData);

    const data = {
      formula: {
        ...formData,
        fragranceAmount,
        waxAmount,
      },
      token,
    };

    dispatch(createFormula(data));
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const selectedFormulas = [...selected];

      if (selectedFormulas.length === 1) {
        handleUpdate();
      } else {
        handleCreate();
      }
    }
  };

  /* DISPLAYS ERROR & SUCCESS MESSAGES */
  useEffect(() => {
    if (success && message) {
      toast.success(message);
      dispatch(reset());
      handleClose();
    }

    // update formula slice to display an error message
    // update error to boolean instead of string
    if (error) {
      toast.error(error);
      dispatch(reset());
    }

    // resets the form after modal is closed
    if (!show) {
      setFormData(formulaData);
      setValidated(false);
    }
  }, [success, message, error, show, dispatch]);

  /* SETS FORMULA IF ONE ID IS ADDED TO SELECTED */
  useEffect(() => {
    if (selected.length === 1) {
      const id = selected[0];

      const data = formulas.find((item) => item.id === id);

      dispatch(setFormula(data));
    }
  }, [selected, dispatch, formulas]);

  return (
    <>
      {/* PAGE HEADE */}
      <PageHeader>
        <Container>
          <Row>
            <Col sm={6}>
              <h2>Formulas</h2>
            </Col>
            <Col sm={6} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                <span>Add formula</span>
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

        {/* FORMULA TABLE */}
        <FormulaTable handleSelect={handleSelect} />

        {/* MODAL TO CREATE OR EDIT FORMULA */}
        <SiteModal
          show={show}
          handleClose={handleClose}
          modalTitle={selected.length === 1 ? 'Edit Formula' : 'Add Formula'}
        >
          <FormulaForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClose={handleClose}
            formData={formData}
            validated={validated}
          />
        </SiteModal>
      </Container>
    </>
  );
}
