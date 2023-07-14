import axios from "axios";
import { Form, Field, Formik } from "formik";
import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
function EditTour() {
  const navigate = useNavigate()
  const param = useParams();
  const [tour, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/tuors/'+param.id)
      .then((res) => {
        setStudent(res.data);
      });

  }, [param.id]);

  const handleSubmit = (values) => {
    axios
      .put('http://localhost:3000/tuors/'+param.id, values)
      .then(() => {
        alert("Update thành công");
        navigate('/');
      });
  };
  
  // Cần phải có thì mới có thể gán giá trị của student vào trong form update
  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Update Student</h2>
      <Formik initialValues={tour} onSubmit={handleSubmit}>
        <Form>
            <div className="form-group">
                <label htmlFor="title">Tên:</label>
                <Field
                    className="form-control"
                    id="title"
                    name="title"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="price">Giá:</label>
                <Field
                    className="form-control"
                    id="price"
                    name="price"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Mô tả:</label>
                <Field
                    className="form-control"
                    id="description"
                    name="description"
                    as="textarea"
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditTour;
