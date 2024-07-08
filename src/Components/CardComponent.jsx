import { 
  CCard, 
  CCardBody, 
  CCardFooter, 
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle

} from '@coreui/react';

import mapIcon from '../Utilities/iconMapper';

export default function CardComponent({ slug, name, year, tags, links, image, description }) {
  return (
    <CCard textBgColor={'light'}>
      <CCardImage orientation="top" src={image} />
      
      <CCardBody>
        <CCardTitle>{name}</CCardTitle>
        <CCardSubtitle className="mb-2 text-body-secondary">
          {year}
        </CCardSubtitle>

        <CCardText>{description}</CCardText>

        {links.map((link, index) => (
          <CCardLink key={index} href={link.href}>{link.title}</CCardLink>
        ))}
      </CCardBody>

      <CCardFooter>
        {tags.map((tag, index) => {
          const Icon = mapIcon(tag);

          return Icon ? <Icon /> : (<></>);
        })}
      </CCardFooter>
    </CCard>
  );
}