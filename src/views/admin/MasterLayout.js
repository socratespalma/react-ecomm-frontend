import Navbar from "../../components/admin/Navbar";
import SideMenu from "../../components/admin/SideMenu";

const MasterLayout = () => {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="columns">
          <div class="column is-3 ">
            <SideMenu />
          </div>
          <div class="column is-9">
            <h1>Content Here</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
