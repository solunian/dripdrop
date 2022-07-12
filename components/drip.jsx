import { useSpring, animated, easings } from '@react-spring/web';

export default function Drip() {

  const { xyz, width, height, borderRadius, opacity } = useSpring({
    from: {
      xyz: [73, -213, 0],
      width: 6,
      height: 6,
      borderRadius: "40% 50% 50% 50%",
      opacity: 1,
    },
    to: [
      {
        xyz: [65, -206, 0],
        width: 16,
        height: 16,
        borderRadius: "15% 50% 50% 50%",
      },
      {
        xyz: [65, 150, 0],
        opacity: 0,
      }
    ],
    config: {
      duration: 750,
      easing: easings.easeInQuart,
    },
    loop: true,
  });

  return (
    <>
      <animated.div
        style={{
          transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px) rotate(45deg)`),
          borderRadius: borderRadius,
          width: width,
          height: height,
          opacity: opacity,
          backgroundColor: "white",
        }}
      >
      </animated.div>
    </>
  );
};