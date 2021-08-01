import { celebrate, Joi, Segments } from 'celebrate';

export const list = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required,
  },
});

export const delet = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required,
  },
});

export const create = celebrate({
  [Segments.BODY]: {
    name: Joi.string(),
    price: Joi.number().precision(2),
    quantity: Joi.number().precision(2),
  },
});

export const update = celebrate({
  [Segments.BODY]: {
    name: Joi.string(),
    price: Joi.number().precision(2),
    quantity: Joi.number().precision(2),
  },
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required,
  },
});
