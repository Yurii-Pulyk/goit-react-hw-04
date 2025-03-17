import { Field, Form, Formik } from 'formik';

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        actions.resetForm();
      }}
    >
      <Form>
        <Field type="text" name="topic" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
