import useClass from "../../../hooks/useClass";
import usePaidStudent from "../../../hooks/usePaidStudent";
import { useSpring, animated } from 'react-spring';

const InstructorHome = () => {

  
    const [classes] = useClass();
    const [paidStudents] = usePaidStudent();

const totalMyClassAnimation = useSpring({
  from: { transform: 'scale(0)' },
  to: { transform: 'scale(1)' },
  config: { tension: 200, friction: 10 },
});

const totalStudentAnimation = useSpring({
  from: { transform: 'scale(0)' },
  to: { transform: 'scale(1)' },
  config: { tension: 200, friction: 10 },
});
  return (
    <div className='mx-auto my-8'>
      <div className='stats shadow'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>{/* SVG icon */}</div>
          <div className='stat-title'>Total My Class</div>
          <div className='stat-value text-center'>
            <animated.div style={totalMyClassAnimation}>
              <div className='animated-text'>{classes?.length}</div>
            </animated.div>
          </div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>{/* SVG icon */}</div>
          <div className='stat-title'>Total Enroll Student</div>
          <div className='stat-value text-center'>
            <animated.div style={totalStudentAnimation}>
              <div className='animated-text'>{paidStudents?.length}</div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
