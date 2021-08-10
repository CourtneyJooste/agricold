import React, { FC } from 'react';
import styled from 'styled-components';
import { Container, FormRow, Input, TextArea } from '../components';
import { Button as AntButton, Card, Col, message, Row, Space } from 'antd';
import * as Yup from 'yup';
import { useFormData } from '../hooks/use-form-data';
import { Formik, FormikHelpers, FormikValues } from 'formik';
import { encode } from '../helpers';
import Zoom from 'react-reveal/Zoom';
import { FormButton } from '../components/FormButton';
import { Form } from 'formik-antd'

const Button = styled(FormButton)`
  margin-top: 15px;
`;

const Jumbotron = styled.div`
  background: ${p => p.theme.primary};
`;

const Hidden = styled.div`
  display: none;
`;

const contactSchema = Yup.object().shape({
  question: Yup.string()
    .nullable()
    .label('First name'),
  name: Yup.string()
    .required()
    .label('Your name'),
  email: Yup.string()
    .required()
    .label('Email Address'),
  contactNumber: Yup.string()
    .required()
    .label('Contact Number'),
  companyName: Yup.string()
    .required()
    .label('Company Name'),
  message: Yup.string()
    .nullable()
    .label('Your message (Optional)'),
});

interface IProps {
  [x: string]: any;
}

const Contact: FC<IProps> = ({ }) => {


  const { fields, ...formikCTX } = useFormData(contactSchema, {
    onSubmit: async (values: FormikValues, actions: FormikHelpers<any>) => {
      console.log(values);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })
        .then(() => {
          message.success({ content: 'Thanks, we will be in contact!' });
          actions.resetForm()
        })
        .catch((e: any) => {
          message.error({ content:  e?.message ?? 'Unable to submit contact request.' });
        })
        .finally(() => actions.setSubmitting(false))
    }
  });

  return (
    <>
      <Jumbotron>
        <Container centered inverse>
          <h1>Contact us</h1>
          <p>We're here to help and answer any questions you have. We look forward to hearing from you!</p>
        </Container>
      </Jumbotron>
      <Container width={'1200px'}>
        <Row>
          <Col md={12} sm={24} xs={24}>
            <h2>Contact Details:</h2>
            <br />
            <div>
              <Zoom><b>South Africa</b></Zoom>

              <Zoom>
                <p>
                  Somerset West
                  <br />
                  Cape Town
                  <br />
                  <br />
                  Marcus Jooste: <a>+27 72 290 3888</a>
                  <br />
                  Email: <a>marcus@coldex.co.za</a>
                </p>
              </Zoom>

              <Zoom><b>Zambia</b></Zoom>

              <Zoom>
                <p>
                  Chandwe Musonda Road
                  <br />
                  Lusaka
                  <br />
                  <br />
                  Marcus Jooste: <a>+260 96 526 4884</a>
                  <br />
                  Email: <a>marcus@coldex.co.za</a>
                </p>
              </Zoom>


              <Zoom><b>Zimbabwe</b></Zoom>


              <Zoom>
                <p>
                  Graniteside
                  <br />
                  Harare
                  <br />
                  <br />
                  Marcus Jooste: <a>+263 78 052 6338</a>
                  <br />
                  Email: <a>marcus@coldex.co.za</a>
                </p>
              </Zoom>
            </div>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Card
              type="inner"
              title="Get in touch!"
            >
              <Formik {...formikCTX} enableReinitialize validateOnBlur>
                {({ handleSubmit, values, isSubmitting, setFieldValue }: any) => (
                  <Form layout={'vertical'} name="contact" data-netlify={true} netlify-honeypot="question">
                    <Hidden><Input {...fields.question} /></Hidden>
                    <FormRow gutter={6}>
                      <Input {...fields.name} />
                      <Input {...fields.contactNumber} />
                      <Input {...fields.email} />
                      <Input {...fields.companyName} />
                      <TextArea rows={4} {...fields.message} />
                      <Button>Submit</Button>
                    </FormRow>
                  </Form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Contact.defaultProps = {};

export default Contact;