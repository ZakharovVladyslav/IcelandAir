import "./index.css"

const Component = ({
  firstIcon,
  secondIcon,
  thirdIcon,
  firstCustomIcon,
  secondCustomIcon,
  thirdCustomIcon,
  initialStep,
  step,
  color,
  altColor,
  firstColor,
  secondColor,
  thirdColor,
}) => {
  const renderIcon = ({ variant, custom, color }) => {
    switch (variant) {
      case "done":
        return (
          <svg
            preserveAspectRatio="none"
            width="100%"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            position="absolute"
            display="inline-block"
          >
            <path
              d="M15 28C23.0081 28 29.5 21.732 29.5 14C29.5 6.26801 23.0081 0 15 0C6.99187 0 0.5 6.26801 0.5 14C0.5 21.732 6.99187 28 15 28Z"
              fill="white"
            />
            <path
              d="M15 27C22.4558 27 28.5 21.1797 28.5 14C28.5 6.8203 22.4558 1 15 1C7.54416 1 1.5 6.8203 1.5 14C1.5 21.1797 7.54416 27 15 27Z"
              stroke={color}
              strokeWidth="2"
            />
            <path
              d="M15 5.302C13.2722 5.302 11.5832 5.81436 10.1466 6.77428C8.70995 7.73421 7.59024 9.09858 6.92903 10.6949C6.26782 12.2912 6.09482 14.0477 6.4319 15.7423C6.76898 17.4369 7.60101 18.9935 8.82276 20.2153C10.0445 21.437 11.6011 22.2691 13.2957 22.6061C14.9904 22.9432 16.7469 22.7702 18.3432 22.109C19.9395 21.4478 21.3038 20.3281 22.2638 18.8915C23.2237 17.4548 23.736 15.7658 23.736 14.038C23.7292 11.7232 22.8066 9.50513 21.1698 7.86829C19.5329 6.23146 17.3149 5.30886 15 5.302ZM13.207 18.696L8.72904 14.219L9.98904 12.963L13.215 16.189L20.019 9.38L21.275 10.636L13.207 18.696Z"
              fill={"#50E68C"}
            />
          </svg>
        );
      case "unlock":
        return (
          <svg
            preserveAspectRatio="none"
            width="100%"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            position="absolute"
            display="inline-block"
          >
            <path
              d="M14.5 28C22.232 28 28.5 21.732 28.5 14C28.5 6.26801 22.232 0 14.5 0C6.76801 0 0.5 6.26801 0.5 14C0.5 21.732 6.76801 28 14.5 28Z"
              fill="white"
            />
            <path
              d="M14.5 27C21.6797 27 27.5 21.1797 27.5 14C27.5 6.8203 21.6797 1 14.5 1C7.3203 1 1.5 6.8203 1.5 14C1.5 21.1797 7.3203 27 14.5 27Z"
              stroke={color}
              strokeWidth="2"
            />
            <path
              d="M19.494 11.3499H11.594V9.33394C11.594 8.57648 11.8949 7.85005 12.4305 7.31444C12.9661 6.77884 13.6926 6.47794 14.45 6.47794C15.2075 6.47794 15.9339 6.77884 16.4695 7.31444C17.0051 7.85005 17.306 8.57648 17.306 9.33394C17.306 9.48989 17.368 9.63945 17.4782 9.74972C17.5885 9.85999 17.7381 9.92194 17.894 9.92194C18.05 9.92194 18.1995 9.85999 18.3098 9.74972C18.4201 9.63945 18.482 9.48989 18.482 9.33394C18.4784 8.80445 18.3705 8.28086 18.1646 7.79305C17.9586 7.30525 17.6586 6.86279 17.2816 6.49094C16.5203 5.73995 15.4919 5.32215 14.4225 5.32944C13.3532 5.33673 12.3305 5.76853 11.5795 6.52983C10.8285 7.29113 10.4107 8.31959 10.418 9.38894V11.3499H9.41401C8.96937 11.3513 8.54327 11.5283 8.22858 11.8424C7.91389 12.1565 7.73612 12.5823 7.73401 13.0269V21.0909C7.73533 21.5361 7.91275 21.9626 8.22753 22.2774C8.5423 22.5922 8.96885 22.7696 9.41401 22.7709H19.494C19.9392 22.7696 20.3657 22.5922 20.6805 22.2774C20.9953 21.9626 21.1727 21.5361 21.174 21.0909V13.0269C21.1719 12.5823 20.9941 12.1565 20.6794 11.8424C20.3647 11.5283 19.9386 11.3513 19.494 11.3499ZM15.042 16.5919V19.4819C15.0424 19.6342 14.9848 19.7809 14.881 19.8923C14.7772 20.0038 14.6349 20.0715 14.483 20.0819C14.4034 20.0857 14.3239 20.0733 14.2492 20.0455C14.1746 20.0177 14.1063 19.975 14.0487 19.92C13.991 19.865 13.9451 19.7989 13.9137 19.7257C13.8823 19.6525 13.8661 19.5736 13.866 19.4939V16.5919C13.5926 16.4589 13.3724 16.2372 13.2414 15.9629C13.1103 15.6886 13.0761 15.3779 13.1443 15.0817C13.2126 14.7854 13.3792 14.5211 13.6171 14.3318C13.855 14.1425 14.15 14.0394 14.454 14.0394C14.758 14.0394 15.053 14.1425 15.2909 14.3318C15.5288 14.5211 15.6955 14.7854 15.7637 15.0817C15.832 15.3779 15.7977 15.6886 15.6667 15.9629C15.5356 16.2372 15.3154 16.4589 15.042 16.5919Z"
              fill={color}
            />
          </svg>
        );
      case "custom":
        return custom;

      default:
        return (
          <svg
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            width="100%"
            position="absolute"
            display="inline-block"
          >
            <path
              d="M14.5 28C22.232 28 28.5 21.732 28.5 14C28.5 6.26801 22.232 0 14.5 0C6.76801 0 0.5 6.26801 0.5 14C0.5 21.732 6.76801 28 14.5 28Z"
              fill="white"
            />
            <path
              d="M14.5 27C21.6797 27 27.5 21.1797 27.5 14C27.5 6.8203 21.6797 1 14.5 1C7.3203 1 1.5 6.8203 1.5 14C1.5 21.1797 7.3203 27 14.5 27Z"
              stroke={color}
              strokeWidth="2"
            />
            <path
              d="M19.214 11.35H18.204V9.38796C18.2113 8.31861 17.7935 7.29016 17.0425 6.52885C16.2915 5.76755 15.2688 5.33576 14.1995 5.32846C13.1301 5.32117 12.1017 5.73897 11.3404 6.48996C10.5791 7.24095 10.1473 8.26361 10.14 9.33296V11.35H9.13398C8.68934 11.3513 8.26324 11.5283 7.94855 11.8424C7.63386 12.1565 7.45609 12.5823 7.45398 13.027V21.091C7.4553 21.5361 7.63272 21.9627 7.9475 22.2774C8.26227 22.5922 8.68882 22.7696 9.13398 22.771H19.214C19.6591 22.7696 20.0857 22.5922 20.4005 22.2774C20.7152 21.9627 20.8927 21.5361 20.894 21.091V13.027C20.8919 12.5823 20.7141 12.1565 20.3994 11.8424C20.0847 11.5283 19.6586 11.3513 19.214 11.35ZM14.762 16.592V19.482C14.7623 19.6342 14.7048 19.781 14.601 19.8924C14.4972 20.0038 14.3549 20.0716 14.203 20.082C14.1234 20.0858 14.0439 20.0734 13.9692 20.0455C13.8945 20.0177 13.8263 19.975 13.7686 19.92C13.711 19.865 13.665 19.7989 13.6336 19.7257C13.6022 19.6525 13.586 19.5736 13.586 19.494V16.592C13.3126 16.459 13.0924 16.2372 12.9613 15.9629C12.8302 15.6886 12.796 15.378 12.8643 15.0817C12.9325 14.7855 13.0992 14.5211 13.3371 14.3318C13.5749 14.1425 13.87 14.0394 14.174 14.0394C14.478 14.0394 14.773 14.1425 15.0109 14.3318C15.2488 14.5211 15.4154 14.7855 15.4837 15.0817C15.5519 15.378 15.5177 15.6886 15.3866 15.9629C15.2556 16.2372 15.0354 16.459 14.762 16.592ZM17.03 11.35H11.318V9.33396C11.318 8.5765 11.6189 7.85007 12.1545 7.31447C12.6901 6.77886 13.4165 6.47796 14.174 6.47796C14.9314 6.47796 15.6579 6.77886 16.1935 7.31447C16.7291 7.85007 17.03 8.5765 17.03 9.33396V11.35Z"
              fill={color}
            />
          </svg>
        );
    }
  };

  const switchLineSize = (step) => {
    switch (parseInt(step)) {
      case 0:
        return "0%";
      case 1:
        return "25.33%";
      case 2:
        return "60.66%";
      case 3:
        return "100%";
      default:
        return "0%";
    }
  };

  const switchInitalLineSize = (initialStep) => {
    return switchLineSize(initialStep);
  };

  return (
    <>
      <div className="main-con" >
        <div className="con1">
          <div
            className="child1"
            style={{
              background: color,
            }}
          ></div>
          <div
            className={`child2 ${step ? "animate" : ""}`}
            style={{
              width: switchInitalLineSize(initialStep),
              background: altColor,
              "--initial-width": switchInitalLineSize(initialStep),
              "--final-width": switchLineSize(step),
            }}
          ></div>
        </div>
        <div className="con2">
          <div className="icon1">
            {renderIcon({
              variant: firstIcon,
              custom: firstCustomIcon ? firstCustomIcon : null,
              color: firstColor,
            })}
          </div>
          <div className="icon2">
            {renderIcon({
              variant: secondIcon,
              custom: secondCustomIcon ? secondCustomIcon : null,
              color: secondColor,
            })}
          </div>
          <div className="icon3">
            {renderIcon({
              variant: thirdIcon,
              custom: thirdCustomIcon ? thirdCustomIcon : null,
              color: thirdColor,
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
