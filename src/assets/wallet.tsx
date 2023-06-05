import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export function WalletIcon(props: SvgProps) {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
      {...props}
    >
      <Path
        d="M45.444 51H6.556A5.555 5.555 0 011 45.444V6.556A5.556 5.556 0 016.556 1h38.888A5.556 5.556 0 0151 6.556v38.888A5.555 5.555 0 0145.444 51z"
        stroke="#12C2E9"
        strokeWidth={1.5}
      />
      <Path
        d="M1 34.333h17.778c.92 0 1.68.773 2.083 1.6C21.433 37.108 22.79 38.5 26 38.5c3.211 0 4.567-1.389 5.139-2.567.403-.827 1.164-1.6 2.083-1.6H51M1 12.111h50M1 23.222h50"
        stroke="#12C2E9"
        strokeWidth={1.5}
      />
    </Svg>
  )
}