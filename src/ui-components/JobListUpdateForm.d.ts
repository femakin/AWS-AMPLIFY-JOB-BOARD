/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { JobList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JobListUpdateFormInputValues = {
    JobPosition?: string;
    Category?: string;
    Location?: string;
    Experience?: string;
    JobStatus?: string;
    Agency?: string;
    Description?: string;
};
export declare type JobListUpdateFormValidationValues = {
    JobPosition?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Experience?: ValidationFunction<string>;
    JobStatus?: ValidationFunction<string>;
    Agency?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobListUpdateFormOverridesProps = {
    JobListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    JobPosition?: PrimitiveOverrideProps<TextFieldProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Experience?: PrimitiveOverrideProps<TextFieldProps>;
    JobStatus?: PrimitiveOverrideProps<TextFieldProps>;
    Agency?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobListUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobList?: JobList;
    onSubmit?: (fields: JobListUpdateFormInputValues) => JobListUpdateFormInputValues;
    onSuccess?: (fields: JobListUpdateFormInputValues) => void;
    onError?: (fields: JobListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobListUpdateFormInputValues) => JobListUpdateFormInputValues;
    onValidate?: JobListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobListUpdateForm(props: JobListUpdateFormProps): React.ReactElement;
