const {width} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import {Html5Entities} from 'html-entities';
const entities = new Html5Entities();

export const sanitizePost = (post) => {
  const {id, date} = post;
  const uri = post._embedded['wp:featuredmedia'][0].source_url;

  const title = entities.decode(post.title.rendered);
  const author = post._embedded.author[0].name;
  const category = post.categories[0];
  const Rawdescription = post.content.rendered;

  const description = Rawdescription.replace(
    /(width=")\d+("\W+height=")\d+/g,
    `$1330$2${width - 100}`,
  );
  entities.decode(description);
  const datejs = dayjs(date).fromNow();
  return {
    id,
    title,
    datejs,
    description,
    author,
    uri,
    category,
  };
};
