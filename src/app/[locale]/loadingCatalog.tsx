import Skeleton from "@mui/material/Skeleton";

export default function LoadingCatalog() {
    return (
        <>
            <Skeleton variant="rectangular" width="100%" height={45} />
            <Skeleton variant="rectangular" width="100%" sx={{ mt: 5 }} height={300} />
            <Skeleton variant="text" width="65%" sx={{ mt: 2 }} height={30} />
            <Skeleton variant="text" width="100%" sx={{}} height={30} />
            <Skeleton variant="text" width="80%" sx={{}} height={30} />
            <Skeleton variant="text" width="65%" sx={{}} height={30} />
            <Skeleton variant="text" width="65%" sx={{}} height={30} />
        </>
    )
}
