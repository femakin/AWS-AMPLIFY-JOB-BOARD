/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ApplicantList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ApplicantListUpdateFormInputValues = {
    Name?: string;
    Email?: string;
    Message?: string;
    PortfolioLink?: string;
    Status?: string;
    JobID?: string;
};
export declare type ApplicantListUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Message?: ValidationFunction<string>;
    PortfolioLink?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
    JobID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicantListUpdateFormOverridesProps = {
    ApplicantListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Message?: PrimitiveOverrideProps<TextFieldProps>;
    PortfolioLink?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<TextFieldProps>;
    JobID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicantListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicantListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    applicantList?: ApplicantList;
    onSubmit?: (fields: ApplicantListUpdateFormInputValues) => ApplicantListUpdateFormInputValues;
    onSuccess?: (fields: ApplicantListUpdateFormInputValues) => void;
    onError?: (fields: ApplicantListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicantListUpdateFormInputValues) => ApplicantListUpdateFormInputValues;
    onValidate?: ApplicantListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicantListUpdateForm(props: ApplicantListUpdateFormProps): React.ReactElement;
