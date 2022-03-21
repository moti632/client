import React from "react";
import Form from "./../common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "./../common/pageHeader";
import { toast } from "react-toastify";
import { getCurrentUser, login, signup } from "../../services/userService";
import { Navigate } from "react-router-dom";

class BizSignup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(2).label("Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    try {
      const user = { ...this.state.data };
      user.biz = true;
      await signup(user);
      toast.success(`${user.name} you signup successfully`);
      delete user.name;
      delete user.biz;
      await login(user);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { email: "This user is already registered!" },
        });
    }
  };

  render() {
    const user = getCurrentUser();
    if (user) return <Navigate replace to="/" />;

    return (
      <div
        style={{ minHeight: "85vh" }}
        className="container-fluid bg-light pb-4">
        <div className="container">
          <PageHeader
            title="Business Signup Page"
            subTitle="Here you can signup as business and start creating your business cards"
          />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border p-2 bg-white">
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Business Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BizSignup;
