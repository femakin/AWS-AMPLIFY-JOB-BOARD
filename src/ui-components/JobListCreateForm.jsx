/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { JobList } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function JobListCreateForm(props) {
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
    JobPosition: "",
    Category: "",
    Location: "",
    Experience: "",
    JobStatus: "",
    Agency: "",
    Description: "",
  };
  const [JobPosition, setJobPosition] = React.useState(
    initialValues.JobPosition
  );
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [Experience, setExperience] = React.useState(initialValues.Experience);
  const [JobStatus, setJobStatus] = React.useState(initialValues.JobStatus);
  const [Agency, setAgency] = React.useState(initialValues.Agency);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setJobPosition(initialValues.JobPosition);
    setCategory(initialValues.Category);
    setLocation(initialValues.Location);
    setExperience(initialValues.Experience);
    setJobStatus(initialValues.JobStatus);
    setAgency(initialValues.Agency);
    setDescription(initialValues.Description);
    setErrors({});
  };
  const validations = {
    JobPosition: [],
    Category: [],
    Location: [],
    Experience: [],
    JobStatus: [],
    Agency: [],
    Description: [],
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
          JobPosition,
          Category,
          Location,
          Experience,
          JobStatus,
          Agency,
          Description,
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
          await DataStore.save(new JobList(modelFields));
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
      {...getOverrideProps(overrides, "JobListCreateForm")}
      {...rest}
    >
      <TextField
        label="Job position"
        isRequired={false}
        isReadOnly={false}
        value={JobPosition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              JobPosition: value,
              Category,
              Location,
              Experience,
              JobStatus,
              Agency,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.JobPosition ?? value;
          }
          if (errors.JobPosition?.hasError) {
            runValidationTasks("JobPosition", value);
          }
          setJobPosition(value);
        }}
        onBlur={() => runValidationTasks("JobPosition", JobPosition)}
        errorMessage={errors.JobPosition?.errorMessage}
        hasError={errors.JobPosition?.hasError}
        {...getOverrideProps(overrides, "JobPosition")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              JobPosition,
              Category: value,
              Location,
              Experience,
              JobStatus,
              Agency,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              JobPosition,
              Category,
              Location: value,
              Experience,
              JobStatus,
              Agency,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="Experience"
        isRequired={false}
        isReadOnly={false}
        value={Experience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              JobPosition,
              Category,
              Location,
              Experience: value,
              JobStatus,
              Agency,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Experience ?? value;
          }
          if (errors.Experience?.hasError) {
            runValidationTasks("Experience", value);
          }
          setExperience(value);
        }}
        onBlur={() => runValidationTasks("Experience", Experience)}
        errorMessage={errors.Experience?.errorMessage}
        hasError={errors.Experience?.hasError}
        {...getOverrideProps(overrides, "Experience")}
      ></TextField>
      <TextField
        label="Job status"
        isRequired={false}
        isReadOnly={false}
        value={JobStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              JobPosition,
              Category,
              Location,
              Experience,
              JobStatus: value,
              Agency,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.JobStatus ?? value;
          }
          if (errors.JobStatus?.hasError) {
            runValidationTasks("JobStatus", value);
          }
          setJobStatus(value);
        }}
        onBlur={() => runValidationTasks("JobStatus", JobStatus)}
        errorMessage={errors.JobStatus?.errorMessage}
        hasError={errors.JobStatus?.hasError}
        {...getOverrideProps(overrides, "JobStatus")}
      ></TextField>
      <TextField
        label="Agency"
        isRequired={false}
        isReadOnly={false}
        value={Agency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              JobPosition,
              Category,
              Location,
              Experience,
              JobStatus,
              Agency: value,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Agency ?? value;
          }
          if (errors.Agency?.hasError) {
            runValidationTasks("Agency", value);
          }
          setAgency(value);
        }}
        onBlur={() => runValidationTasks("Agency", Agency)}
        errorMessage={errors.Agency?.errorMessage}
        hasError={errors.Agency?.hasError}
        {...getOverrideProps(overrides, "Agency")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              JobPosition,
              Category,
              Location,
              Experience,
              JobStatus,
              Agency,
              Description: value,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
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
