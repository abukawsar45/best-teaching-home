import useAdminCheck from "../../../hooks/useAdminCheck";
import useAdminForUsers from "../../../hooks/useAdminForUsers";
import { useSpring, animated } from 'react-spring';


const AdminHome = () => {

const [allUsersData] = useAdminForUsers();
  const [allClassData] = useAdminCheck();

 const totallAllClassAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 200, friction: 10 },
  });

  const paidAllUserAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 200, friction: 10 },
  });

  return (
    <div className='mx-auto my-8'>
      <div className='stats shadow'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>{/* SVG icon */}</div>
          <div className='stat-title'>Total Class</div>
          <div className='stat-value text-center'>
            <animated.div style={totallAllClassAnimation}>
              <div className='animated-text'>{allClassData?.length}</div>
            </animated.div>
          </div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>{/* SVG icon */}</div>
          <div className='stat-title'>Total User</div>
          <div className='stat-value text-center'>
            <animated.div style={paidAllUserAnimation}>
              <div className='animated-text'>{allUsersData?.length}</div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;