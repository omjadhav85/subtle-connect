import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "../features";
import { PrivateRoute } from "../components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen flex container max-w-5xl mx-auto">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route
            path="/"
            element={
              <div className="flex-1 page">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nulla esse tempore eveniet voluptas officia assumenda! Cumque
                totam sed beatae? Ducimus quae culpa voluptatibus sequi deleniti
                suscipit consectetur nostrum vel nam reprehenderit. Explicabo,
                autem, eos minus iusto doloribus praesentium fugiat corrupti
                accusantium facilis at expedita debitis. Illo quas nulla
                voluptatibus quo itaque aliquid error fugit alias possimus
                maiores ut, amet quae minus dolorum eum nesciunt assumenda
                soluta eaque voluptates magni culpa distinctio ex temporibus.
                Minus, modi totam, ipsam tempora nulla earum eaque placeat
                repellendus aut facere cupiditate quia! Alias, eveniet ipsa modi
                voluptas ea impedit illo obcaecati repudiandae facere ut placeat
                id minus praesentium quibusdam accusantium. Rerum necessitatibus
                porro sed ab repellendus incidunt illum omnis sapiente nulla
                consequuntur odio reprehenderit, ut harum qui ullam placeat
                molestias possimus nam laudantium vel veritatis corrupti, quis,
                reiciendis accusantium! Minus numquam quia assumenda aliquid
                neque dolorum, id nam sit iure alias velit natus aspernatur?
                Exercitationem, consequuntur! Numquam, earum vero officia vitae
                illo autem, blanditiis eveniet nam corporis aperiam explicabo!
                Culpa accusamus, at blanditiis sunt similique harum magnam amet
                ipsam quisquam dolorum debitis sint facilis consectetur.
                Assumenda, nam cupiditate. Odio dolores iusto dolorem. Fugiat
                sit eaque eligendi libero nesciunt, laboriosam deserunt quam
                perspiciatis ullam magnam quo odit impedit ratione sint
                veritatis blanditiis sunt, soluta deleniti officiis facere dolor
                nostrum fuga! Nesciunt nisi architecto delectus harum natus
                velit fugiat, quaerat provident. Voluptate doloremque libero
                perferendis iusto quisquam tempora magnam repellat architecto,
                ipsam ducimus laborum similique doloribus sint enim velit minus
                quos officiis! Totam perspiciatis natus nemo sit fugit nostrum
                impedit veniam laudantium. Sequi est molestiae dicta sunt! Ad,
                porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet nulla esse tempore eveniet voluptas officia assumenda!
                Cumque totam sed beatae? Ducimus quae culpa voluptatibus sequi
                deleniti suscipit consectetur nostrum vel nam reprehenderit.
                Explicabo, autem, eos minus iusto doloribus praesentium fugiat
                corrupti accusantium facilis at expedita debitis. Illo quas
                nulla voluptatibus quo itaque aliquid error fugit alias possimus
                maiores ut, amet quae minus dolorum eum nesciunt assumenda
                soluta eaque voluptates magni culpa distinctio ex temporibus.
                Minus, modi totam, ipsam tempora nulla earum eaque placeat
                repellendus aut facere cupiditate quia! Alias, eveniet ipsa modi
                voluptas ea impedit illo obcaecati repudiandae facere ut placeat
                id minus praesentium quibusdam accusantium. Rerum necessitatibus
                porro sed ab repellendus incidunt illum omnis sapiente nulla
                consequuntur odio reprehenderit, ut harum qui ullam placeat
                molestias possimus nam laudantium vel veritatis corrupti, quis,
                reiciendis accusantium! Minus numquam quia assumenda aliquid
                neque dolorum, id nam sit iure alias velit natus aspernatur?
                Exercitationem, consequuntur! Numquam, earum vero officia vitae
                illo autem, blanditiis eveniet nam corporis aperiam explicabo!
                Culpa accusamus, at blanditiis sunt similique harum magnam amet
                ipsam quisquam dolorum debitis sint facilis consectetur.
                Assumenda, nam cupiditate. Odio dolores iusto dolorem. Fugiat
                sit eaque eligendi libero nesciunt, laboriosam deserunt quam
                perspiciatis ullam magnam quo odit impedit ratione sint
                veritatis blanditiis sunt, soluta deleniti officiis facere dolor
                nostrum fuga! Nesciunt nisi architecto delectus harum natus
                velit fugiat, quaerat provident. Voluptate doloremque libero
                perferendis iusto quisquam tempora magnam repellat architecto,
                ipsam ducimus laborum similique doloribus sint enim velit minus
                quos officiis! Totam perspiciatis natus nemo sit fugit nostrum
                impedit veniam laudantium. Sequi est molestiae dicta sunt! Ad,
                porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet nulla esse tempore eveniet voluptas officia assumenda!
                Cumque totam sed beatae? Ducimus quae culpa voluptatibus sequi
                deleniti suscipit consectetur nostrum vel nam reprehenderit.
                Explicabo, autem, eos minus iusto doloribus praesentium fugiat
                corrupti accusantium facilis at expedita debitis. Illo quas
                nulla voluptatibus quo itaque aliquid error fugit alias possimus
                maiores ut, amet quae minus dolorum eum nesciunt assumenda
                soluta eaque voluptates magni culpa distinctio ex temporibus.
                Minus, modi totam, ipsam tempora nulla earum eaque placeat
                repellendus aut facere cupiditate quia! Alias, eveniet ipsa modi
                voluptas ea impedit illo obcaecati repudiandae facere ut placeat
                id minus praesentium quibusdam accusantium. Rerum necessitatibus
                porro sed ab repellendus incidunt illum omnis sapiente nulla
                consequuntur odio reprehenderit, ut harum qui ullam placeat
                molestias possimus nam laudantium vel veritatis corrupti, quis,
                reiciendis accusantium! Minus numquam quia assumenda aliquid
                neque dolorum, id nam sit iure alias velit natus aspernatur?
                Exercitationem, consequuntur! Numquam, earum vero officia vitae
                illo autem, blanditiis eveniet nam corporis aperiam explicabo!
                Culpa accusamus, at blanditiis sunt similique harum magnam amet
                ipsam quisquam dolorum debitis sint facilis consectetur.
                Assumenda, nam cupiditate. Odio dolores iusto dolorem. Fugiat
                sit eaque eligendi libero nesciunt, laboriosam deserunt quam
                perspiciatis ullam magnam quo odit impedit ratione sint
                veritatis blanditiis sunt, soluta deleniti officiis facere dolor
                nostrum fuga! Nesciunt nisi architecto delectus harum natus
                velit fugiat, quaerat provident. Voluptate doloremque libero
                perferendis iusto quisquam tempora magnam repellat architecto,
                ipsam ducimus laborum similique doloribus sint enim velit minus
                quos officiis! Totam perspiciatis natus nemo sit fugit nostrum
                impedit veniam laudantium. Sequi est molestiae dicta sunt! Ad,
                porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet nulla esse tempore eveniet voluptas officia assumenda!
                Cumque totam sed beatae? Ducimus quae culpa voluptatibus sequi
                deleniti suscipit consectetur nostrum vel nam reprehenderit.
                Explicabo, autem, eos minus iusto doloribus praesentium fugiat
                corrupti accusantium facilis at expedita debitis. Illo quas
                nulla voluptatibus quo itaque aliquid error fugit alias possimus
                maiores ut, amet quae minus dolorum eum nesciunt assumenda
                soluta eaque voluptates magni culpa distinctio ex temporibus.
                Minus, modi totam, ipsam tempora nulla earum eaque placeat
                repellendus aut facere cupiditate quia! Alias, eveniet ipsa modi
                voluptas ea impedit illo obcaecati repudiandae facere ut placeat
                id minus praesentium quibusdam accusantium. Rerum necessitatibus
                porro sed ab repellendus incidunt illum omnis sapiente nulla
                consequuntur odio reprehenderit, ut harum qui ullam placeat
                molestias possimus nam laudantium vel veritatis corrupti, quis,
                reiciendis accusantium! Minus numquam quia assumenda aliquid
                neque dolorum, id nam sit iure alias velit natus aspernatur?
                Exercitationem, consequuntur! Numquam, earum vero officia vitae
                illo autem, blanditiis eveniet nam corporis aperiam explicabo!
                Culpa accusamus, at blanditiis sunt similique harum magnam amet
                ipsam quisquam dolorum debitis sint facilis consectetur.
                Assumenda, nam cupiditate. Odio dolores iusto dolorem. Fugiat
                sit eaque eligendi libero nesciunt, laboriosam deserunt quam
                perspiciatis ullam magnam quo odit impedit ratione sint
                veritatis blanditiis sunt, soluta deleniti officiis facere dolor
                nostrum fuga! Nesciunt nisi architecto delectus harum natus
                velit fugiat, quaerat provident. Voluptate doloremque libero
                perferendis iusto quisquam tempora magnam repellat architecto,
                ipsam ducimus laborum similique doloribus sint enim velit minus
                quos officiis! Totam perspiciatis natus nemo sit fugit nostrum
                impedit veniam laudantium. Sequi est molestiae dicta sunt! Ad,
                porro.
              </div>
            }
          />
          <Route
            path="/explore"
            element={<div className="flex-1">Explore</div>}
          />
          <Route
            path="/bookmarks"
            element={<div className="flex-1">Bookmarks</div>}
          />
          <Route
            path="/notifications"
            element={<div className="flex-1">Notifications</div>}
          />
          <Route
            path="/profile"
            element={<div className="flex-1">Profile</div>}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: 40,
        }}
      />
    </div>
  );
};

export default App;
