import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={225}
    height={530}
    viewBox="0 0 225 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="397" cy="44" r="31" />
    <rect x="0" y="0" rx="0" ry="0" width="207" height="139" />
    <rect x="353" y="28" rx="0" ry="0" width="42" height="32" />
    <rect x="370" y="30" rx="0" ry="0" width="35" height="24" />
    <rect x="-145" y="138" rx="0" ry="0" width="58" height="0" />
    <rect x="39" y="163" rx="0" ry="0" width="122" height="18" />
    <rect x="6" y="197" rx="0" ry="0" width="198" height="82" />
    <rect x="50" y="301" rx="0" ry="0" width="114" height="18" />
    <rect x="6" y="340" rx="0" ry="0" width="70" height="16" />
    <rect x="133" y="341" rx="0" ry="0" width="72" height="17" />
    <rect x="6" y="385" rx="0" ry="0" width="73" height="25" />
    <rect x="124" y="387" rx="14" ry="14" width="90" height="36" />
  </ContentLoader>
);

export default Skeleton;
