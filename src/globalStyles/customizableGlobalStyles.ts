import styled, { css } from "styled-components";
import { Colors } from "../globalStyles/colors";
import { fontFamilies, fontSizes, fontWeights } from "../globalStyles/Theme";

/*
    Customizable Global Styles:
    Container
    Box
    Flex
    Button
    Span
    Text area
    Input Fields
*/

interface BoxProps {
  // children: React.ReactNode;
  // className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  gap?: string;
  border?: string;
  maxH?: string;
  minH?: string;
  maxW?: string;
  minW?: string;
  display?: string;
  direction?: "row" | "column";
  flexGrow?: string;
  borderTop?: string;
  borderRadius?: string;
  borderStyle?: string;
  borderColor?: string;
  borderWidth?: string;
  bgColor?: string;
  color?: string;
  justifyContent?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "left"
    | "normal"
    | "revert"
    | "right"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch"
    | "unset";
  justifyItems?: string;
  justifySelf?: string;
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  boxShadow?: string;
  cursor?: string;
  zIndex?: string;
  overflow?: string;
  overflowY?: string;
  overflowX?: string;
  onClick?: any;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  flexWrap?: string;

  smResponsive?: string;
  mdResponsive?: string;
}

export const Box = styled.div<BoxProps>`
  ${({ width }) => width && "width: " + width};
  ${({ height }) => height && "height: " + height};
  ${({ p }) => p && "padding: " + p};
  ${({ pt }) => pt && "padding-top: " + pt};
  ${({ pr }) => pr && "padding-right: " + pr};
  ${({ pb }) => pb && "padding-bottom: " + pb};
  ${({ pl }) => pl && "padding-left: " + pl};
  ${({ m }) => m && "margin: " + m};
  ${({ mt }) => mt && "margin-top: " + mt};
  ${({ mr }) => mr && "margin-right: " + mr};
  ${({ mb }) => mb && "margin-bottom: " + mb};
  ${({ ml }) => ml && "margin-left: " + ml};
  ${({ gap }) => gap && "gap: " + gap};
  ${({ minW }) => minW && "min-width: " + minW};
  ${({ maxW }) => maxW && "max-width: " + maxW};
  ${({ minH }) => minH && "min-height: " + minH};
  ${({ maxH }) => maxH && "max-height: " + maxH};
  ${({ display }) => display && "display: " + display};
  ${({ direction }) => direction && "flex-direction: " + direction};
  ${({ position }) => position && "position: " + position};
  ${({ border }) => border && "border: " + border};
  ${({ borderTop }) => borderTop && "border-top: " + borderTop};
  ${({ borderRadius }) => borderRadius && "border-radius: " + borderRadius};
  ${({ borderWidth }) => borderWidth && "border-width: " + borderWidth};
  ${({ borderStyle }) => borderStyle && "border-style: " + borderStyle};
  ${({ borderColor }) => borderColor && "border-style: " + borderColor};
  ${({ bgColor }) => bgColor && "background-color: " + bgColor};
  ${({ color }) => color && "color: " + color};
  ${({ justifyContent }) => justifyContent && "justify-content: " + justifyContent};
  ${({ justifyItems }) => justifyItems && "justify-items: " + justifyItems};
  ${({ justifySelf }) => justifySelf && "justify-self: " + justifySelf};
  ${({ alignContent }) => alignContent && "align-content: " + alignContent};
  ${({ alignItems }) => alignItems && "align-items: " + alignItems};
  ${({ alignSelf }) => alignSelf && "align-self: " + alignSelf};
  ${({ fontSize }) => fontSize && "font-size: " + fontSize};
  ${({ fontFamily }) => fontFamily && "font-family: " + fontFamily};
  ${({ fontWeight }) => fontWeight && "font-weight: " + fontWeight};
  ${({ boxShadow }) => boxShadow && "box-shadow: " + boxShadow};
  ${({ cursor }) => cursor && "cursor: " + cursor};
  ${({ zIndex }) => zIndex && "z-index: " + zIndex};
  ${({ overflow }) => overflow && "oveflow: " + overflow};
  ${({ overflowY }) => overflowY && "overflow-y: " + overflowY};
  ${({ overflowX }) => overflowX && "overflow-x: " + overflowX};
  ${({ flexGrow }) => flexGrow && "flex-grow: " + flexGrow};
  ${({ top }) => top && "top: " + top};
  ${({ bottom }) => bottom && "bottom: " + bottom};
  ${({ left }) => left && "left: " + left};
  ${({ right }) => right && "right: " + right};
`;

interface FlexProps{
  flexFlow?: string;
  gap?: string;
  shrink?: string;
  wrap?: string;
  cursor?: string;
  transition?: string;
}

export const Flex = styled(Box)<FlexProps>`
  ${({ flexFlow }) => flexFlow && "flex-flow: " + flexFlow};
  ${({ gap }) => gap && "gap: " + gap};
  ${({ cursor }) => cursor && "cursor: " + cursor};
  ${({ shrink }) => shrink && "flex-shrink: " + shrink};
  ${({ wrap }) => wrap && "flex-wrap: " + wrap};
  ${({ transition }) => transition ?? "unset"};
`;


interface SpanProps {
  display?: string;
  gap?: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
  noWrap?: boolean;
  width?: string;
  background?: string;
  textAlign?: string;
  lineThrough?: boolean;
  lineThroughSize?: string;
  cursor?: string;
  opacity?: number;
  fontStyle?: string;
  border?: string;
  padding?: string;
  height?: string;
  borderRadius?: string;
  smResponsive?: string;
  mdResponsive?: string;
  lgResponsive?: string;
  textTransform?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

export const Span = styled(Box)<SpanProps>`
  ${({ display }) => display && "display: " + display};
  font-size: ${({ fontSize }) => fontSize ?? "inherit"};
  font-style: ${({ fontStyle }) => fontStyle ?? "none"};
  color: ${({ color }) => (color ? `${color} !important` : "inherit")};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: ${({ textAlign }) => textAlign};
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};
  border: ${({ border }) => border || "unset"};
  padding: ${({ padding }) => padding || "unset"};
  background-color: ${({ background }) => background || "unset"};
  border-radius: ${({ borderRadius }) => borderRadius || "unset"};
  text-transform: ${({ textTransform }) => textTransform || "unset"};
  font-family: ${({ fontFamily }) => fontFamily ?? fontFamilies.main};

  ${({ noWrap }) =>
    noWrap &&
    `
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${({ lineThrough, lineThroughSize }) =>
    lineThrough &&
    `text-decoration: line-through;
      text-decoration-thickness: ${lineThroughSize ?? "1px"}
  `};

  @media screen and (max-width: 770px) {
    ${({ mdResponsive }) => css`
      ${mdResponsive}
    `}
  }

  @media screen and (max-width: 430px) {
    ${({ smResponsive }) => css`
      ${smResponsive}
    `}
  }

  @media screen and (max-width: 930px) {
    ${({ lgResponsive }) => css`
      ${lgResponsive}
    `}
  }
`;

interface ButtonProps{
  bgColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  borderColor?: string;
  borderSize?: string;
  padding?: string;
  margin?: string;
  notFilled?: boolean;
  color?: string;
  disable?: boolean;
  bgHover?: string;
  actionBtn?: boolean;
  alignItems?: string;
  justifyContent?: string;
  hoverColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
}

export const Button = styled.button<ButtonProps>`
  text-decoration: none;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight ?? fontWeights.normal};
  font-size: ${({ fontSize }) => fontSize ?? fontSizes.base};
  line-height: 1rem;
  color: ${({ color }) => color ?? Colors.white};
  font-family: ${({ fontFamily }) => fontFamily ?? fontFamilies.main};
  background-color: ${({ bgColor, disable, notFilled }): string =>
    disable ? Colors.WhiteShades95 : notFilled ? "transparent" : bgColor ?? Colors.OrangeShades50};
  border: ${({ borderSize }): string => borderSize ?? "1px"} solid
    ${({ bgColor, borderColor, disable }): string =>
      disable ? Colors.WhiteShades95 : borderColor ?? bgColor ?? Colors.OrangeShades50};
  box-sizing: border-box;
  border-radius: 0.5rem;
  /* border-radius: ${({ borderRadius }) => borderRadius ?? "0.5rem"}; */
  padding: ${({ padding }) => padding ?? ".25rem 1.45rem"};
  width: ${({ width }) => width};
  height: ${({ height }) => height ?? "2.5rem"};
  display: flex;
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  text-align: center;
  margin: ${({ margin }) => margin ?? "unset"};
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
  transition: ease-in-out all 0.3s;
`