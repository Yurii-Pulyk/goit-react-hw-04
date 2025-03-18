import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
const validationSchema = Yup.object({
  topic: Yup.string()
    .trim()
    .min(1, 'Поле не може бути порожнім')
    .required('Введіть пошуковий запит'),
});

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        if (!values.topic.trim()) {
          toast.error('Введіть пошуковий запит!');
          return;
        }
        onSearch(values.topic);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field type="text" name="topic" />
          <ErrorMessage name="topic" component="div" />
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
}
