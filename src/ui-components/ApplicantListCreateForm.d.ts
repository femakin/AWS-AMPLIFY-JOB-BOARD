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
export declare type ApplicantListCreateFormInputValues = {
    Name?: string;
    Email?: string;
    Message?: string;
    PortfolioLink?: string;
    Status?: string;
    JobID?: string;
};
export declare type ApplicantListCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
    PortfolioLink?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
    JobID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicantListCreateFormOverridesProps = {
    ApplicantListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
    PortfolioLink?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<TextFieldProps>;
    JobID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicantListCreateFormProps = React.PropsWithChildren<{
    overrides?: ApplicantListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ApplicantListCreateFormInputValues) => ApplicantListCreateFormInputValues;
    onSuccess?: (fields: ApplicantListCreateFormInputValues) => void;
    onError?: (fields: ApplicantListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicantListCreateFormInputValues) => ApplicantListCreateFormInputValues;
    onValidate?: ApplicantListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicantListCreateForm(props: ApplicantListCreateFormProps): React.ReactElement;
