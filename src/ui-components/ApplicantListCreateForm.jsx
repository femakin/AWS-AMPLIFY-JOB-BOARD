/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ApplicantList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ApplicantListCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Email: "",
    Message: "",
    PortfolioLink: "",
    Status: "",
    JobID: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Message, setMessage] = React.useState(initialValues.Message);
  const [PortfolioLink, setPortfolioLink] = React.useState(
    initialValues.PortfolioLink
  );
  const [Status, setStatus] = React.useState(initialValues.Status);
  const [JobID, setJobID] = React.useState(initialValues.JobID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setEmail(initialValues.Email);
    setMessage(initialValues.Message);
    setPortfolioLink(initialValues.PortfolioLink);
    setStatus(initialValues.Status);
    setJobID(initialValues.JobID);
    setErrors({});
  };
  const validations = {
    Name: [],
    Email: [{ type: "Email" }],
    Message: [],
    PortfolioLink: [],
    Status: [],
    JobID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          Email,
          Message,
          PortfolioLink,
          Status,
          JobID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new ApplicantList(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ApplicantListCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Email,
              Message,
              PortfolioLink,
              Status,
              JobID,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email: value,
              Message,
              PortfolioLink,
              Status,
              JobID,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={Message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Message: value,
              PortfolioLink,
              Status,
              JobID,
            };
            const result = onChange(modelFields);
            value = result?.Message ?? value;
          }
          if (errors.Message?.hasError) {
            runValidationTasks("Message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("Message", Message)}
        errorMessage={errors.Message?.errorMessage}
        hasError={errors.Message?.hasError}
        {...getOverrideProps(overrides, "Message")}
      ></TextField>
      <TextField
        label="Portfolio link"
        isRequired={false}
        isReadOnly={false}
        value={PortfolioLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Message,
              PortfolioLink: value,
              Status,
              JobID,
            };
            const result = onChange(modelFields);
            value = result?.PortfolioLink ?? value;
          }
          if (errors.PortfolioLink?.hasError) {
            runValidationTasks("PortfolioLink", value);
          }
          setPortfolioLink(value);
        }}
        onBlur={() => runValidationTasks("PortfolioLink", PortfolioLink)}
        errorMessage={errors.PortfolioLink?.errorMessage}
        hasError={errors.PortfolioLink?.hasError}
        {...getOverrideProps(overrides, "PortfolioLink")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={Status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Message,
              PortfolioLink,
              Status: value,
              JobID,
            };
            const result = onChange(modelFields);
            value = result?.Status ?? value;
          }
          if (errors.Status?.hasError) {
            runValidationTasks("Status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("Status", Status)}
        errorMessage={errors.Status?.errorMessage}
        hasError={errors.Status?.hasError}
        {...getOverrideProps(overrides, "Status")}
      ></TextField>
      <TextField
        label="Job id"
        isRequired={false}
        isReadOnly={false}
        value={JobID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Message,
              PortfolioLink,
              Status,
              JobID: value,
            };
            const result = onChange(modelFields);
            value = result?.JobID ?? value;
          }
          if (errors.JobID?.hasError) {
            runValidationTasks("JobID", value);
          }
          setJobID(value);
        }}
        onBlur={() => runValidationTasks("JobID", JobID)}
        errorMessage={errors.JobID?.errorMessage}
        hasError={errors.JobID?.hasError}
        {...getOverrideProps(overrides, "JobID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
