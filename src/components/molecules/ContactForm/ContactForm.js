import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .input-label {
      position: relative;
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      .required-info {
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(100%);
        color: red;
        font-family: ${({ theme }) => theme.fontFamilyText};
        font-size: ${({ theme }) => theme.bodyXS};
      }

      @media (min-width: 992px) {
        max-width: 500px;
      }
    }
  }

  form input {
    background-color: #fff;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.violet};
    outline: none;
    height: 50px;
    width: 100%;
    padding: 10px;
    font-family: ${({ theme }) => theme.fontFamilyText};
    font-size: ${({ theme }) => theme.bodyS};

    @media (min-width: 992px) {
      max-width: 500px;
    }
  }

  .submit-btn {
    margin-top: 50px;
    width: 180px;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.violet};
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.bodyS};
    font-family: ${({ theme }) => theme.fontFamilyHeading};
    font-weight: ${({ theme }) => theme.regular};

    &:hover {
      background-color: #6f37e6;
    }
  }
`;

const ContactForm = ({ setFormSubmitted, setFormError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/kontakt@codected.eu", {
        Name: data.Name,
        Phone: data.Phone,
        Email: data.Email,
        Message: data.Message,
      })
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
          setFormSubmitted(true);
          setFormError(false);
        } else {
          setIsLoading(false);
          setFormSubmitted(false);
          setFormError(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setFormSubmitted(false);
        setFormError(true);
      });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input-label">
          <input placeholder="Imię i nazwisko*" {...register("Name", { required: true })} />
          {errors.Name && <span className="required-info">To pole jest wymagane</span>}
        </label>
        <label className="input-label">
          <input placeholder="Numer telefonu" {...register("Phone", { required: true })} />
          {errors.Phone && <span className="required-info">To pole jest wymagane</span>}
        </label>
        <label className="input-label">
          <input placeholder="Email*" {...register("Email", { required: true })} />
          {errors.Email && <span className="required-info">To pole jest wymagane</span>}
        </label>
        <label className="input-label">
          <input type="textarea" placeholder="Wiadomość*" {...register("Message", { required: true })} />
          {errors.Message && <span className="required-info">To pole jest wymagane</span>}
        </label>
        <button type="submit" className="submit-btn">
          {!isLoading ? "Wyślij" : "Wysyłanie..."}
        </button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
