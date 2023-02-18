/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JobListCreateFormInputValues = {
    JobPosition?: string;
    Category?: string;
    Location?: string;
    Experience?: string;
    JobStatus?: string;
    Agency?: string;
    Description?: string;
};
export declare type JobListCreateFormValidationValues = {
    JobPosition?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Experience?: ValidationFunction<string>;
    JobStatus?: ValidationFunction<string>;
    Agency?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobListCreateFormOverridesProps = {
    JobListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    JobPosition?: PrimitiveOverrideProps<TextFieldProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Experience?: PrimitiveOverrideProps<TextFieldProps>;
    JobStatus?: PrimitiveOverrideProps<TextFieldProps>;
    Agency?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobListCreateFormProps = React.PropsWithChildren<{
    overrides?: JobListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobListCreateFormInputValues) => JobListCreateFormInputValues;
    onSuccess?: (fields: JobListCreateFormInputValues) => void;
    onError?: (fields: JobListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobListCreateFormInputValues) => JobListCreateFormInputValues;
    onValidate?: JobListCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobListCreateForm(props: JobListCreateFormProps): React.ReactElement;
