import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useStudent from "../../../hooks/useStudent";
import AdminHome from "./AdminHome";
import InstructorHome from "./InstructorHome";
import StudentHome from "./StudentHome";


const DashboardHome = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  

  

  return (
    <div className='mx-auto my-10'>
      {isStudent && (
       
              <StudentHome />
           
      )}
      { isInstructor &&
        
        <InstructorHome />
      
      }
      { isAdmin &&
       
            
        <AdminHome /> 
       
        
      }
    </div>
  );
};

export default DashboardHome;
