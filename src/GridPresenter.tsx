import React, { ReactElement } from "react";
import { styled, VariantProps } from '@stitches/react';

const GridContainer = styled("div", {
  display: "grid",
  textAlign: "center",
  "& code": {
    display: "block"
  },
  variants: {
    columns: {
      4: {
        gridTemplateColumns: "repeat(4, auto)"
      },
      8: {
        gridTemplateColumns: "repeat(8, auto)"
      }
    }
  }
});

export type ComponentVariants = VariantProps<typeof GridContainer>;

export const GridPresenter: React.FC<ComponentVariants> = ({ columns = 4, children }) => (
  children && (
    <GridContainer columns={columns}>
      {React.Children.map(children, child => (
        <div>
          { React.cloneElement(child as ReactElement) }
          <code>{ (child as any).type?.displayName }</code>
        </div>
      ))}
    </GridContainer>
  )
);
