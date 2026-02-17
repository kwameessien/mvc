const normalizeField = (val) => (Array.isArray(val) ? val[0] : val);

exports.normalizeFormFields = (fields) => {
  const normalized = {};
  for (const [key, val] of Object.entries(fields)) {
    normalized[key] = normalizeField(val);
  }
  return normalized;
};

const requiredFields = ['title', 'price', 'category', 'essential', 'created_at'];

exports.fieldValidator = (fields) => {
  const normalized = exports.normalizeFormFields(fields);
  const emptyFields = requiredFields.filter((field) => {
    const val = normalized[field];
    return val === undefined || val === null || (typeof val === 'string' && val.trim().length === 0);
  });
  if (emptyFields.length > 0) {
    return {
      error: 'All fields are required',
      emptyFields,
    };
  }
  return null;
};
