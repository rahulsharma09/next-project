"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import CommingSoon from "./comming-soon/page";

const Home = () => {
  const { data: session } = useSession();

  // console.log("data - ", session);

  return (
    <div className="auth">
      {/* {session ? (
        <div className="signed_in">
          <Image
            src={session.user.image}
            height={80}
            width={80}
            alt="user-profile"
          />
          <p>
            Welcome <b>{session.user?.name}</b>
          </p>
          <p>{session.user?.email}</p>
          <button className="signout" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="signed_out">
          <h1>You are not signed in</h1>
          <button className="signin" onClick={() => signIn("google")}>
            {" "}
            <Image src={GoogleIcon} height={20} width={20} /> Sign In using google
          </button>
        </div>
      )} */}
      <CommingSoon />
    </div>
  );
};

export default Home;
