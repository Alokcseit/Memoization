import React from "react";

function Child({ title, count }) {
  console.log("child changed");
  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          height: "350px",
          width: "350px",
          textAlign: "center",
          marginLeft: "70px",
        }}
      >
        <h4>{title.toUpperCase()}</h4>
        <br />
        <h5>{count} times changed</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          reprehenderit sunt nostrum iste rem reiciendis nemo maxime sapiente
          sed tempore facilis ducimus assumenda, rerum beatae repudiandae
          quibusdam dolorem dicta velit.
        </p>
      </div>
    </>
  );
}

export default React.memo(Child);
