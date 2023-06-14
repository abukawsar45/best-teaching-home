import usePaidClass from '../../../hooks/usePaidClass';
import useMySelectedClass from '../../../hooks/useMySelectedClass';
import { useSpring, animated } from 'react-spring';

const StudentHome = () => {
  const [selectedClass] = useMySelectedClass();
  const [paidClasses] = usePaidClass();

  const selectedClassAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 200, friction: 10 },
  });

  const paidClassesAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 200, friction: 10 },
  });

  return (
    <div className='mx-auto my-8'>
      <div className='stats shadow'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>{/* SVG icon */}</div>
          <div className='stat-title'>Total Selected</div>
          <div className='stat-value text-center'>
            <animated.div style={selectedClassAnimation}>
              <div className='animated-text'>{selectedClass?.length}</div>
            </animated.div>
          </div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>{/* SVG icon */}</div>
          <div className='stat-title'>Total Enroll</div>
          <div className='stat-value text-center'>
            <animated.div style={paidClassesAnimation}>
              <div className='animated-text'>{paidClasses?.length}</div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
