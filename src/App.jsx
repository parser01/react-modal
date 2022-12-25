import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

function App() {
	const [modalIsActive, setModalIsActive] = useState(false);

	const openModal = () => {
		setModalIsActive(true);
	};

	return (
		<div className="app">
			<main>
				<button onClick={openModal}>Open modal window</button>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In esse
					possimus sequi, dolor expedita et perferendis temporibus maiores
					repudiandae voluptas molestiae earum quibusdam qui nemo nesciunt
					saepe maxime ipsa eos adipisci ex enim provident distinctio iure!
					Dolorem minus quo porro esse, aut, veniam beatae reiciendis enim
					nisi ratione culpa laboriosam aliquid eos saepe rerum
					exercitationem. Sequi ratione nam praesentium maiores asperiores
					saepe provident culpa ab. Quae molestias eaque omnis perspiciatis
					facilis rerum quas voluptas assumenda facere, nobis soluta id
					vero inventore harum exercitationem dolores veniam quo incidunt
					repudiandae unde! Iure a nobis delectus deleniti quae laudantium
					ipsum repellendus doloremque quibusdam assumenda. Amet voluptatum
					ipsam minus corporis? Hic repellat cupiditate laboriosam nam sed
					ab iure ut aspernatur autem nisi tempore, voluptates neque
					nesciunt velit optio et deserunt impedit ipsum sequi repellendus
					eveniet provident doloremque! Recusandae nesciunt perspiciatis
					sit soluta esse est, consequuntur, itaque harum aspernatur minus,
					dolor non a exercitationem quo sunt magni nostrum facere. Unde
					architecto accusamus assumenda corrupti placeat iusto quasi
					obcaecati laudantium quia, eum, ipsam fugit totam quae similique
					hic dolores saepe, nam quos sint! Iste, quis at earum sunt
					nesciunt quam quasi error suscipit dicta vitae non! Doloribus
					fuga quis facilis exercitationem, illum sequi laborum unde ut
					quos! Iure aperiam facere, numquam ab ea molestiae enim? Quae
					repellat dolorem sed nam maiores pariatur odio totam. Quas,
					deserunt. Rerum corrupti mollitia itaque sunt aut, est animi
					minima beatae nesciunt maiores dolorum, enim adipisci commodi
					officiis ut ratione, ipsam iusto qui fugiat omnis! Voluptates
					expedita excepturi facere porro iure neque voluptate, officia,
					libero distinctio assumenda animi deserunt a soluta illo modi
					fugit ea repudiandae impedit? Saepe nobis corporis accusantium
					vero quaerat impedit architecto eaque recusandae aut, sit
					possimus optio similique ipsa qui nam suscipit nihil asperiores
					pariatur commodi assumenda! Harum, adipisci quod cumque
					distinctio nesciunt aspernatur fugit. Ipsam, esse.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In esse
					possimus sequi, dolor expedita et perferendis temporibus maiores
					repudiandae voluptas molestiae earum quibusdam qui nemo nesciunt
					saepe maxime ipsa eos adipisci ex enim provident distinctio iure!
					Dolorem minus quo porro esse, aut, veniam beatae reiciendis enim
					nisi ratione culpa laboriosam aliquid eos saepe rerum
					exercitationem. Sequi ratione nam praesentium maiores asperiores
					saepe provident culpa ab. Quae molestias eaque omnis perspiciatis
					facilis rerum quas voluptas assumenda facere, nobis soluta id
					vero inventore harum exercitationem dolores veniam quo incidunt
					repudiandae unde! Iure a nobis delectus deleniti quae laudantium
					ipsum repellendus doloremque quibusdam assumenda. Amet voluptatum
					ipsam minus corporis? Hic repellat cupiditate laboriosam nam sed
					ab iure ut aspernatur autem nisi tempore, voluptates neque
					nesciunt velit optio et deserunt impedit ipsum sequi repellendus
					eveniet provident doloremque! Recusandae nesciunt perspiciatis
					sit soluta esse est, consequuntur, itaque harum aspernatur minus,
					dolor non a exercitationem quo sunt magni nostrum facere. Unde
					architecto accusamus assumenda corrupti placeat iusto quasi
					obcaecati laudantium quia, eum, ipsam fugit totam quae similique
					hic dolores saepe, nam quos sint! Iste, quis at earum sunt
					nesciunt quam quasi error suscipit dicta vitae non! Doloribus
					fuga quis facilis exercitationem, illum sequi laborum unde ut
					quos! Iure aperiam facere, numquam ab ea molestiae enim? Quae
					repellat dolorem sed nam maiores pariatur odio totam. Quas,
					deserunt. Rerum corrupti mollitia itaque sunt aut, est animi
					minima beatae nesciunt maiores dolorum, enim adipisci commodi
					officiis ut ratione, ipsam iusto qui fugiat omnis! Voluptates
					expedita excepturi facere porro iure neque voluptate, officia,
					libero distinctio assumenda animi deserunt a soluta illo modi
					fugit ea repudiandae impedit? Saepe nobis corporis accusantium
					vero quaerat impedit architecto eaque recusandae aut, sit
					possimus optio similique ipsa qui nam suscipit nihil asperiores
					pariatur commodi assumenda! Harum, adipisci quod cumque
					distinctio nesciunt aspernatur fugit. Ipsam, esse.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In esse
					possimus sequi, dolor expedita et perferendis temporibus maiores
					repudiandae voluptas molestiae earum quibusdam qui nemo nesciunt
					saepe maxime ipsa eos adipisci ex enim provident distinctio iure!
					Dolorem minus quo porro esse, aut, veniam beatae reiciendis enim
					nisi ratione culpa laboriosam aliquid eos saepe rerum
					exercitationem. Sequi ratione nam praesentium maiores asperiores
					saepe provident culpa ab. Quae molestias eaque omnis perspiciatis
					facilis rerum quas voluptas assumenda facere, nobis soluta id
					vero inventore harum exercitationem dolores veniam quo incidunt
					repudiandae unde! Iure a nobis delectus deleniti quae laudantium
					ipsum repellendus doloremque quibusdam assumenda. Amet voluptatum
					ipsam minus corporis? Hic repellat cupiditate laboriosam nam sed
					ab iure ut aspernatur autem nisi tempore, voluptates neque
					nesciunt velit optio et deserunt impedit ipsum sequi repellendus
					eveniet provident doloremque! Recusandae nesciunt perspiciatis
					sit soluta esse est, consequuntur, itaque harum aspernatur minus,
					dolor non a exercitationem quo sunt magni nostrum facere. Unde
					architecto accusamus assumenda corrupti placeat iusto quasi
					obcaecati laudantium quia, eum, ipsam fugit totam quae similique
					hic dolores saepe, nam quos sint! Iste, quis at earum sunt
					nesciunt quam quasi error suscipit dicta vitae non! Doloribus
					fuga quis facilis exercitationem, illum sequi laborum unde ut
					quos! Iure aperiam facere, numquam ab ea molestiae enim? Quae
					repellat dolorem sed nam maiores pariatur odio totam. Quas,
					deserunt. Rerum corrupti mollitia itaque sunt aut, est animi
					minima beatae nesciunt maiores dolorum, enim adipisci commodi
					officiis ut ratione, ipsam iusto qui fugiat omnis! Voluptates
					expedita excepturi facere porro iure neque voluptate, officia,
					libero distinctio assumenda animi deserunt a soluta illo modi
					fugit ea repudiandae impedit? Saepe nobis corporis accusantium
					vero quaerat impedit architecto eaque recusandae aut, sit
					possimus optio similique ipsa qui nam suscipit nihil asperiores
					pariatur commodi assumenda! Harum, adipisci quod cumque
					distinctio nesciunt aspernatur fugit. Ipsam, esse.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In esse
					possimus sequi, dolor expedita et perferendis temporibus maiores
					repudiandae voluptas molestiae earum quibusdam qui nemo nesciunt
					saepe maxime ipsa eos adipisci ex enim provident distinctio iure!
					Dolorem minus quo porro esse, aut, veniam beatae reiciendis enim
					nisi ratione culpa laboriosam aliquid eos saepe rerum
					exercitationem. Sequi ratione nam praesentium maiores asperiores
					saepe provident culpa ab. Quae molestias eaque omnis perspiciatis
					facilis rerum quas voluptas assumenda facere, nobis soluta id
					vero inventore harum exercitationem dolores veniam quo incidunt
					repudiandae unde! Iure a nobis delectus deleniti quae laudantium
					ipsum repellendus doloremque quibusdam assumenda. Amet voluptatum
					ipsam minus corporis? Hic repellat cupiditate laboriosam nam sed
					ab iure ut aspernatur autem nisi tempore, voluptates neque
					nesciunt velit optio et deserunt impedit ipsum sequi repellendus
					eveniet provident doloremque! Recusandae nesciunt perspiciatis
					sit soluta esse est, consequuntur, itaque harum aspernatur minus,
					dolor non a exercitationem quo sunt magni nostrum facere. Unde
					architecto accusamus assumenda corrupti placeat iusto quasi
					obcaecati laudantium quia, eum, ipsam fugit totam quae similique
					hic dolores saepe, nam quos sint! Iste, quis at earum sunt
					nesciunt quam quasi error suscipit dicta vitae non! Doloribus
					fuga quis facilis exercitationem, illum sequi laborum unde ut
					quos! Iure aperiam facere, numquam ab ea molestiae enim? Quae
					repellat dolorem sed nam maiores pariatur odio totam. Quas,
					deserunt. Rerum corrupti mollitia itaque sunt aut, est animi
					minima beatae nesciunt maiores dolorum, enim adipisci commodi
					officiis ut ratione, ipsam iusto qui fugiat omnis! Voluptates
					expedita excepturi facere porro iure neque voluptate, officia,
					libero distinctio assumenda animi deserunt a soluta illo modi
					fugit ea repudiandae impedit? Saepe nobis corporis accusantium
					vero quaerat impedit architecto eaque recusandae aut, sit
					possimus optio similique ipsa qui nam suscipit nihil asperiores
					pariatur commodi assumenda! Harum, adipisci quod cumque
					distinctio nesciunt aspernatur fugit. Ipsam, esse.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. In esse
					possimus sequi, dolor expedita et perferendis temporibus maiores
					repudiandae voluptas molestiae earum quibusdam qui nemo nesciunt
					saepe maxime ipsa eos adipisci ex enim provident distinctio iure!
					Dolorem minus quo porro esse, aut, veniam beatae reiciendis enim
					nisi ratione culpa laboriosam aliquid eos saepe rerum
					exercitationem. Sequi ratione nam praesentium maiores asperiores
					saepe provident culpa ab. Quae molestias eaque omnis perspiciatis
					facilis rerum quas voluptas assumenda facere, nobis soluta id
					vero inventore harum exercitationem dolores veniam quo incidunt
					repudiandae unde! Iure a nobis delectus deleniti quae laudantium
					ipsum repellendus doloremque quibusdam assumenda. Amet voluptatum
					ipsam minus corporis? Hic repellat cupiditate laboriosam nam sed
					ab iure ut aspernatur autem nisi tempore, voluptates neque
					nesciunt velit optio et deserunt impedit ipsum sequi repellendus
					eveniet provident doloremque! Recusandae nesciunt perspiciatis
					sit soluta esse est, consequuntur, itaque harum aspernatur minus,
					dolor non a exercitationem quo sunt magni nostrum facere. Unde
					architecto accusamus assumenda corrupti placeat iusto quasi
					obcaecati laudantium quia, eum, ipsam fugit totam quae similique
					hic dolores saepe, nam quos sint! Iste, quis at earum sunt
					nesciunt quam quasi error suscipit dicta vitae non! Doloribus
					fuga quis facilis exercitationem, illum sequi laborum unde ut
					quos! Iure aperiam facere, numquam ab ea molestiae enim? Quae
					repellat dolorem sed nam maiores pariatur odio totam. Quas,
					deserunt. Rerum corrupti mollitia itaque sunt aut, est animi
					minima beatae nesciunt maiores dolorum, enim adipisci commodi
					officiis ut ratione, ipsam iusto qui fugiat omnis! Voluptates
					expedita excepturi facere porro iure neque voluptate, officia,
					libero distinctio assumenda animi deserunt a soluta illo modi
					fugit ea repudiandae impedit? Saepe nobis corporis accusantium
					vero quaerat impedit architecto eaque recusandae aut, sit
					possimus optio similique ipsa qui nam suscipit nihil asperiores
					pariatur commodi assumenda! Harum, adipisci quod cumque
					distinctio nesciunt aspernatur fugit. Ipsam, esse.
				</p>
			</main>
			<Modal isActive={modalIsActive} setIsActive={setModalIsActive}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
					molestiae officia debitis delectus odit reprehenderit ratione
					unde laudantium corporis repellendus! Tenetur atque ratione
					repellat voluptates sunt quia fuga consequuntur laborum,
					voluptate alias qui, quibusdam aliquam provident. Deserunt
					voluptas saepe alias quae ea nemo, unde esse, soluta maiores
					optio suscipit tenetur!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
					molestiae officia debitis delectus odit reprehenderit ratione
					unde laudantium corporis repellendus! Tenetur atque ratione
					repellat voluptates sunt quia fuga consequuntur laborum,
					voluptate alias qui, quibusdam aliquam provident. Deserunt
					voluptas saepe alias quae ea nemo, unde esse, soluta maiores
					optio suscipit tenetur!
				</p>
			</Modal>
		</div>
	);
}

export default App;
