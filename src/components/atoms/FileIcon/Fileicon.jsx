<<<<<<< HEAD
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";

export const FileIcon = ({ extension }) => {
  const iconStyle = {
    height: "20px",
    width: "20px",
  };

  const IconMapper = {
    js: <FaJs color="yellow" style={iconStyle} />,
    jsx: <GrReactjs color="#61dbfa" style={iconStyle} />,
    css: <FaCss3 color="#3c99dc" style={iconStyle} />,
    html: <FaHtml5 color="#e34c26" style={iconStyle} />,
  };

  return <>{IconMapper[extension]}</>;
=======
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FileIcon } from "../../atoms/FileIcon/Fileicon";

export const TreeNode = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});

  function toggleVisibility(name) {
    setVisibility({
      ...visibility,
      [name]: !visibility[name],
    });
  }

  function computeExtension(fileFolderData) {
    const names = fileFolderData.name.split(".");
    return names[names.length - 1];
  }

  useEffect(() => {
    console.log("Visibility chanmged", visibility);
  }, [visibility]);

  return (
    fileFolderData && (
      <div
        style={{
          paddingLeft: "15px",
          color: "white",
        }}
      >
        {fileFolderData.children /** If the current node is a folder ? */ ? (
          /** If the current node is a folder, render it as a button */
          <button
            onClick={() => toggleVisibility(fileFolderData.name)}
            style={{
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "white",
              backgroundColor: "transparent",
              paddingTop: "15px",
              fontSize: "16px",
            }}
          >
            {visibility[fileFolderData.name] ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowForward />
            )}
            {fileFolderData.name}
          </button>
        ) : (
          /** If the current node is not a folder, render it as a p */
          <div style={{ display: "flex", alignItems: "center" }}>
            <FileIcon extension={computeExtension(fileFolderData)} />
            <p
              style={{
                paddingTop: "5px",
                fontSize: "15px",
                cursor: "pointer",
                marginLeft: "5px",
                // color: "black"
              }}
            >
              {fileFolderData.name}
            </p>
          </div>
        )}
        {visibility[fileFolderData.name] &&
          fileFolderData.children &&
          fileFolderData.children.map((child) => (
            <TreeNode fileFolderData={child} key={child.name} />
          ))}
      </div>
    )
  );
>>>>>>> 87cda64f571c9193ca232c46875065c2c8af9f00
};
