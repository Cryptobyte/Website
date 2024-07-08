import { 
  CCard, 
  CCardBody, 
  CCardFooter, 
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CTooltip

} from '@coreui/react';

import mapIcon from '../Utilities/iconMapper';

export default function CardComponent({ slug, name, year, tags, links, image, description }) {
  return (
    <CCard 
      className='border-0' 
      style={{ 
        maxWidth: '370px',
        '--cui-card-color': 'gray',
        '--cui-card-bg': '#fafafa',
        '--cui-card-cap-bg': '#f8f9fa'
      }}>

      <CCardImage 
        orientation="top" 
        src={image} 
        style={{ height: '350px', maxWidth: '350px', objectFit: 'scale-down' }} />
      
      <CCardBody>
        <CCardTitle>{name}</CCardTitle>
        <CCardSubtitle className="mb-2 text-body-secondary">
          {year}
        </CCardSubtitle>

        <CCardText style={{ height: '200px', overflow: 'scroll' }}>
          {description}
        </CCardText>

        {links.map((link, index) => (
          <CCardLink key={index} href={link.href}>{link.title}</CCardLink>
        ))}
      </CCardBody>

      <CCardFooter className='border-0'>
        {tags.map((tag, index) => {
          const Icon = mapIcon(tag);

          return Icon ? (
            <CTooltip content={tag} key={index}>
              <Icon size={18} style={{ marginRight: '5px' }} />
            </CTooltip>
          
          ) : (<></>);
        })}
      </CCardFooter>
    </CCard>
  );
}