import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
  noteList: Note[] = [
    {
      "title": "cillum ipsum",
      "body": "Et molestiae natus modi quos itaque. Qui autem et sit aut voluptas velit voluptatem hic. Et ut esse et necessitatibus voluptatum ipsa sit asperiores. Aut eos pariatur qui. Necessitatibus tempore nihil mollitia magnam totam in soluta ut iste. Odit quia voluptatem enim delectus iste provident eos eligendi. Culpa possimus porro dignissimos autem omnis rerum. Sed quam et quae veritatis nesciunt. Quidem eveniet eveniet esse iste et rerum et voluptatem maiores. Ut minima saepe voluptatibus est voluptatem voluptatem qui. Qui iste est. Laudantium voluptatem facilis debitis atque. Id ipsam quibusdam saepe dicta dignissimos voluptatibus."
    },
    {
      "title": "qui amet Ut dolore ex",
      "body": "Quae molestiae provident. Reiciendis distinctio quas perferendis adipisci quia rerum maxime velit aut. Et commodi aperiam corporis ut et dolores consectetur voluptatibus. Aut voluptatem sit doloribus doloribus. Debitis et quae distinctio quis veniam quia inventore. Corporis asperiores incidunt exercitationem distinctio sit in. Dolor blanditiis sint hic. Dicta est velit hic eos. Neque asperiores blanditiis voluptatem occaecati quia tempore. Iure est ipsum harum qui quia quo. Voluptatum eaque velit. Illum sint vel ad corrupti impedit sint. Odio quis ad dolor veniam iste maiores laudantium."
    },
    {
      "title": "consequat consectetur occaecat",
      "body": "Harum quidem autem. Id ab totam et eveniet adipisci nobis autem sint ut. Ab et natus dolorem autem. Quisquam cupiditate qui adipisci deleniti ut. Eligendi reiciendis reiciendis. Non asperiores odit velit qui impedit aperiam. Asperiores necessitatibus ad officiis et sit voluptatem recusandae reprehenderit voluptatibus. Cupiditate recusandae excepturi eligendi. Sed nobis et. Temporibus consequatur a sit ducimus laudantium similique necessitatibus provident. Sunt quasi id eum vero rerum officiis ut deserunt. Iste facere molestiae sit quas officia exercitationem repudiandae. Officia saepe tenetur."
    },
    {
      "title": "Ut elit",
      "body": "Sunt nobis excepturi eaque inventore odit consequuntur. Voluptates quo quia. Cupiditate voluptas aut aut. Eaque illum occaecati quo dolor itaque nesciunt saepe incidunt et. Ipsa qui quae ut aliquam nihil natus sint sint harum. Eligendi corrupti placeat ea et ut quibusdam. Nobis laborum iste. Libero quas fugit fuga error veritatis cum est fugit quidem. Iusto consequatur error optio ea velit. Aut voluptas eum et sunt et. Minus aut magnam numquam minus aut non velit. Nihil et quo labore suscipit facere."
    },
    {
      "title": "cupidatat sed magna amet",
      "body": "Repellendus cumque pariatur vel non cumque ea et esse ea. Sunt tenetur ut est quam a quod ut consequatur qui. Corrupti voluptas nobis dolorum voluptatem numquam qui. Fuga numquam odit ab ex ut. Voluptate vel doloremque praesentium qui animi animi laborum. Nulla recusandae minus qui accusamus quasi illum est. Possimus suscipit omnis labore sint sit quas voluptatem perspiciatis. Ab suscipit in voluptatum eveniet consectetur dignissimos. In sint et distinctio ipsa error harum quo ea qui. Sit qui et provident aut iure quod cumque deleniti esse. Adipisci perferendis laudantium nisi sit. Consequatur aut facilis dolores et illum magni eius rem inventore. Qui minus ad sed suscipit quia earum vitae et eum."
    },
    {
      "title": "et dolor aliquip tempor enim",
      "body": "Natus laudantium nesciunt reprehenderit ullam saepe velit est. Velit enim nemo fuga rerum quam animi iusto. Iure aliquid ut eius consequuntur rerum culpa sed amet. Et quis adipisci nostrum excepturi aut ut vitae quidem dolor. Recusandae aliquid sapiente ab doloribus nihil quae autem iure modi. Possimus ea eveniet occaecati. Praesentium possimus dolores. Facilis rerum beatae aut voluptatem ut sed dolorum veniam. Sapiente doloribus nobis minus quaerat illo. In odit sint excepturi quaerat quo illo tempore voluptates. Sint voluptatem corrupti. Voluptate accusamus debitis consequatur et non."
    },
    {
      "title": "do",
      "body": "Animi voluptatibus quae ullam illum magni. Veniam nemo enim nihil aut dolorem. Et non distinctio saepe. Et quae dicta labore itaque doloribus. Labore aliquam doloribus. Veniam voluptas deleniti et dolore ut asperiores. Ea esse odit pariatur eveniet expedita eius. Facilis ut et at quaerat omnis ea vero id. Similique iste unde non modi. Dolorem cupiditate enim eligendi fugit. Ratione iusto id dolor dolor rerum."
    },
    {
      "title": "ea ad do",
      "body": "Libero eum voluptatem iure voluptas. Et qui non debitis ea officiis officia. Praesentium suscipit consectetur. Libero cumque distinctio et. Consequatur ad ut. Et eos doloremque amet sed iste aut. Neque omnis quo. Repudiandae aperiam corrupti in aut neque tempora voluptate ad et. Sit voluptas nihil doloremque quod quidem voluptatum incidunt distinctio saepe. Omnis eveniet atque. Dolorum recusandae ut et id distinctio sequi. Et et dicta ut. Sint corporis deleniti iure voluptas."
    },
    {
      "title": "commodo minim aute laboris",
      "body": "Qui est vitae beatae dolorem quam nobis qui. Labore et expedita est ad aspernatur. Aperiam voluptates nihil facilis eveniet. Qui voluptatem ut animi doloribus commodi libero est. Id perferendis accusantium necessitatibus praesentium. Fugit perferendis dolore deleniti culpa qui natus dicta. Quos a maiores omnis explicabo a. Numquam consequatur maiores eos aut laborum dolor tempora. Dolorum hic vel a voluptates itaque et et. Quam sed reprehenderit sunt voluptatem dolorem facilis."
    },
    {
      "title": "ipsum pariat",
      "body": "Est ut et et. Sint commodi dignissimos a exercitationem natus quas ipsa quia et. Iste et temporibus facere. Est sed voluptatibus suscipit. Accusamus possimus sequi. Necessitatibus a est quia mollitia molestiae. Temporibus est ab harum. Non placeat cumque totam unde. Voluptatem unde dignissimos ipsa temporibus inventore ut aut explicabo. Sed aliquam sint dolorem blanditiis voluptas. Accusantium tempora sit quae."
    },
    {
      "title": "incididunt labore et est",
      "body": "Ullam consectetur qui nostrum ut velit perferendis voluptas. Est nihil pariatur animi. Veritatis atque magni exercitationem sunt sed iusto iure fugiat doloremque. Assumenda iure dolor tempora est dignissimos numquam modi. Adipisci tempora saepe aut nemo ipsum explicabo perferendis ut doloremque. Placeat dolor et quo dolores. Beatae cupiditate et qui perspiciatis dolorem repellendus itaque. Iusto delectus minus sequi repellat alias voluptatum velit. Autem deserunt ut nihil rerum dolorem consectetur et velit qui. Enim aut corporis."
    },
    {
      "title": "quis incididunt eu proi",
      "body": "Consectetur enim est et sint porro ut. Cum corrupti culpa quia vel. Voluptas rerum et velit quia magnam. Ratione quis ipsa. Suscipit rerum aut dolor deserunt aut molestiae qui placeat suscipit. Corporis enim eos ea id adipisci nesciunt et voluptates. Qui tenetur rerum atque est quasi esse asperiores magnam aut. Voluptate natus ipsa minima alias non molestias aut. Impedit nostrum voluptatem qui occaecati. Perferendis consectetur nesciunt repellendus accusantium quam consequatur ut ducimus. Officia consequatur saepe maxime."
    },
    {
      "title": "dolore nostrud",
      "body": "Asperiores ut velit et est nam et debitis. Sunt in ea sit esse. Optio rem iure itaque. Velit facilis non commodi sit reiciendis. Quos quam qui ducimus a. Fugit harum excepturi eligendi laboriosam ut dicta et. Est iusto rem dolor doloremque aut ratione dolore ut. Dolor exercitationem sequi magnam quidem quas quasi quia sed sit. Quia sapiente cupiditate possimus rerum saepe aperiam. Ipsum iusto ipsam velit sequi quis. Aspernatur et sit."
    },
    {
      "title": "deserunt labore est",
      "body": "Rerum exercitationem qui. Voluptate provident enim laboriosam recusandae dolores qui quas. Autem vel vel excepturi officia veritatis consequatur. Ut quae deleniti eum quia officiis totam sit neque. Reprehenderit cumque ut molestiae maxime commodi. Voluptatem voluptate et neque vel qui corporis optio. Nihil inventore perferendis consequuntur repudiandae amet ipsam voluptatem accusamus. Fugiat id et. Dolor eius architecto occaecati quaerat corrupti. Exercitationem eligendi suscipit nam corrupti vel magni omnis officia rerum."
    },
    {
      "title": "ipsum consectetur",
      "body": "Dicta sed rerum sed odio est molestiae magnam. Ut qui aperiam dicta dignissimos doloribus. Ducimus voluptas inventore odio consectetur ut reprehenderit eveniet reprehenderit laboriosam. Laboriosam necessitatibus repudiandae quo ea. Quis expedita optio aut molestias ratione quisquam neque laudantium delectus. Rem placeat omnis illum id atque quasi nihil. Possimus nihil vitae dignissimos et. Distinctio dolor consequatur. Ut fugiat aut voluptatibus quis voluptatem. Excepturi magnam consequuntur. Ea eveniet natus ut porro nisi. Iusto in dolorum. Ipsam aspernatur et rerum sint dolorem quia provident."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
