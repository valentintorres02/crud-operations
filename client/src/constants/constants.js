export const URL_MAIN = 'http://localhost:3000/';

export const OPERATION_URL_MAIN = `${URL_MAIN}operation`;

export const MESSAGE_STRING_CONCEPT = "El concepto debe ser un texto";

export const MESSAGE_REQUIRED_CONCEPT = "Debe ingresar un concepto";

export const MESSAGE_NOT_A_NUMBER = "El monto debe ser un número";

export const MESSAGE_NEGATIVE_NUMBER = "El monto no puede ser negativo";

export const MESSAGE_REQUIRED_AMOUNT = "Debe ingresar un monto";

export const MESSAGE_REQUIRED_DATE = "Debe ingresar una fecha";

export const MESSAGE_STRING_DATE = "Ingrese una fecha válida";

export const MESSAGE_REQUIRED_TYPE = "Debe ingresar un tipo de operación";

export const MESSAGE_STRING_TYPE = "Ingrese un tipo de operación válido";

export const EDIT_OPERATION_TITLE = "Editar operación";

export const UPDATE_FORM_BUTTON_TITLE = "Editar";

export const CREATE_OPERATION_TITLE = "Crear operación";

export const CREATE_FORM_BUTTON_TITLE = "Crear";

export const validateForm = (itemToValidate1, itemToValidate2, itemToValidate3) => {
  if (itemToValidate1.length && itemToValidate2.length && itemToValidate3.length > 0) {
    return true;
  }
  return false;
};

export const pageUrl = (page, size) => {
  return `operation/page?page=${page}&size=${size}`;
}

export const handlePreviousPage = (page, setState) => {
  if (page !== 1) {
    setState(page - 1);
  } else {
    return;
  };
};

export const handleNextPage = (totalPages, page, setState) => {
  if (totalPages !== page) {
    setState(page + 1);
  } else {
    return;
  };
};

export const inputChangeHandler = (e, key, state, setState) => {
  state[key] = e.target.value;
  setState({ ...state });
};

export const deleteOperation = (e, deleteServices, url, state, setState) => {
  const itemId = parseInt(e.target.id);
  if (confirm(`Eliminar la operación ID ${itemId}?`)) {
    deleteServices(url, itemId);
    setState(state.filter(({ id }) => id !== itemId));
  };
};

export const updateOperation = (e, updateServices, url, id, data) => {
  e.preventDefault();
  updateServices(url, id, data);
}

export const createOperation = (e, createServices, url, data) => {
  e.preventDefault();
  createServices(url, data);
}