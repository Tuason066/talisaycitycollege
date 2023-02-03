/* link - http/https:// */
/* strong/bold - *** text *** */

/* TODO: uppercase, capitalize, hashtag(#) */

const ConvertText = ({ value, textClassName }) => {
  let text = value;
  /* link regex */
  const linkText = text.match(/https?:\/\/\S+/g);
  /* replace */
  linkText &&
    linkText.forEach((item) => {
      const linkRegex = new RegExp(item, 'g');
      text = text.replace(
        linkRegex,
        `<a href="${item}" class="text-blue-700 hover:underline">${item}</a>`
      );
    });

  /* bold regex */
  const boldText = text.match(/\*\*\*([^*]+)\*\*\*/g);
  /* replace */
  boldText &&
    boldText.forEach((item) => {
      const textPattern = item.replace(/\*/g, '\\*');
      const newText = item.replace(/\*/g, '');
      let regex = new RegExp(textPattern, 'g');
      text = text.replace(regex, `<strong>${newText}</strong>`);
    });

  /* converted */
  return (
    <p className={textClassName} dangerouslySetInnerHTML={{ __html: text }} />
  );
};
export default ConvertText;
