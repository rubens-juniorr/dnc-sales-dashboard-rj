import { StyledH1, StyledH2 } from '@/componets'
import { Avatar, Box } from '@mui/material'
import { pxToRem } from '@/uils'
import { AvatarListProps } from '@/types'

function AvatarList(props: AvatarListProps) {
  return (
    <>
      {props.listData.map((item, index) => (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            padding: `${pxToRem(12)} 0`,
            key: { index },
          }}
        >
          <Box>
            <Avatar
              alt={item.name}
              src={item.avatar}
              sx={{
                width: pxToRem(48),
                height: pxToRem(48),
                marginRight: pxToRem(16),
              }}
            />
          </Box>
          <Box>
            <StyledH2>{item.name}</StyledH2>
            <StyledH1>{item.subtitle}</StyledH1>
          </Box>
        </Box>
      ))}
    </>
  )
}
export default AvatarList
