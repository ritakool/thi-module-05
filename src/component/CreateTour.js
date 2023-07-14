import axios from "axios";
import { Form, Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";

function CreateTour() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Tạo tour mới</h1>
            <Formik
                initialValues={{
                    title: "",
                    price: "",
                    description: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                    axios
                        .post("http://localhost:3000/tuors", values)
                        .then(() => {
                            alert("Thành Công");
                            navigate("/");
                        });
                }}
            >
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

export default CreateTour;
