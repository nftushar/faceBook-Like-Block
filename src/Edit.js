import { useEffect } from "react";
import Settings from "./Settings";
import FbButton from "./components/FbButton";
import Style from "./Style";


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocks-fb-button-${clientId}`}>
      {!isSelected && <div className="mouse"></div>}
      <Style attributes={attributes} clientId={clientId} />
      <FbButton attributes={attributes} clientId={clientId} />
    </div>
  </>
};
export default Edit;
