// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qQzsBf58SqzNJX45iggq96

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AuthGlobalContext } from "@/common/fragment/authGlobalContext"; // plasmic-import: Xco54Kekq-Th/codeComponent
import { Fragment } from "@/common/fragment/designSystemGlobalContext"; // plasmic-import: I9xFO0-CXlvU/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  authGlobalContextProps?: Partial<
    Omit<React.ComponentProps<typeof AuthGlobalContext>, "children">
  >;

  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, authGlobalContextProps, fragmentProps } = props;

  return (
    <AuthGlobalContext
      {...authGlobalContextProps}
      previewToken={
        authGlobalContextProps && "previewToken" in authGlobalContextProps
          ? authGlobalContextProps.previewToken!
          : undefined
      }
    >
      <Fragment {...fragmentProps}>{children}</Fragment>
    </AuthGlobalContext>
  );
}
