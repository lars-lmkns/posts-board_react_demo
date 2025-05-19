import PostsList from "./components/posts-list/PostsList";
import MainHeader from "./components/header/MainHeader";
import { useState } from "react";


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }


  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
