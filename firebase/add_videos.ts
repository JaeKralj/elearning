import { doc, updateDoc } from 'firebase/firestore'
import { google } from 'googleapis'
import { db } from './config'
// export default async function fetchPlaylistItems() {
//   // let data: any[] = []
//   // // google.options({ auth: process.env.YOUTUBE_API_KEY })
//   // const res = await google.youtube('v3').playlistItems.list({
//   //   playlistId: 'PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX',
//   //   part: ['snippet'],
//   //   key: process.env.YOUTUBE_API_KEY,
//   //   maxResults: 70,
//   // })
//   // res.data.items?.forEach(item => {
//   //   data.push({
//   //     title: item?.snippet?.title,
//   //     description: item?.snippet?.description,
//   //     thumbnail: item?.snippet?.thumbnails?.default?.url,
//   //     videoId: item?.snippet?.resourceId?.videoId,
//   //     publishedAt: item?.snippet?.publishedAt,
//   //   })
//   // })

//   // if (res.data.nextPageToken) {
//   //   const newRes: any = await google.youtube('v3').playlistItems.list({
//   //     playlistId: 'PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX',
//   //     part: ['snippet'],
//   //     key: process.env.YOUTUBE_API_KEY,
//   //     maxResults: 50,
//   //     pageToken: res.data.nextPageToken,
//   //   })
//   //   newRes.data.items?.forEach((item: any) => {
//   //     data.push({
//   //       title: item?.snippet?.title,
//   //       description: item?.snippet?.description,
//   //       thumbnail: item?.snippet?.thumbnails?.default?.url,
//   //       videoId: item?.snippet?.resourceId?.videoId,
//   //       publishedAt: item?.snippet?.publishedAt,
//   //     })
//   //   })
//   // }

//
// }
const fetchPlaylistItems = async (
  playlistId: string,
  maxResults: number,
  pageToken?: string | undefined
) => {
  const apiKey = process.env.YOUTUBE_API_KEY // Replace with your YouTube Data API key

  const res = await google.youtube('v3').playlistItems.list({
    part: ['snippet'],
    playlistId: playlistId,
    maxResults: maxResults,
    key: apiKey,
    pageToken: pageToken,
  })
  const data = res.data
  return data
}
const fetchAllPlaylistItems = async (playlistId: string, maxResults = 50) => {
  let allItems: any[] = []
  let nextPageToken: string | undefined | null = undefined

  do {
    const response = await fetchPlaylistItems(
      playlistId,
      maxResults,
      nextPageToken
    )
    const { items, nextPageToken: next } = response
    items?.forEach(item => {
      if (item?.snippet?.title?.toLocaleLowerCase() === 'private video') return
      allItems.push({
        title: item?.snippet?.title,
        description: item?.snippet?.description,
        thumbnail: {
          url: item?.snippet?.thumbnails?.standard?.url,
          width: item?.snippet?.thumbnails?.standard?.width,
          height: item?.snippet?.thumbnails?.standard?.height,
        },
        videoId: item?.snippet?.resourceId?.videoId,
        playlistId: playlistId,
        publishedAt: item?.snippet?.publishedAt,
      })
    })
    nextPageToken = next
  } while (nextPageToken)

  return allItems
}

export default async function addVideoToDoc({
  id,
  playlistId,
}: {
  id: string
  playlistId: string
}) {
  const videoData: any[] = await fetchAllPlaylistItems(playlistId)
  try {
    // Reference to the basics document
    const docRef = doc(db, 'levels', id)

    // Update the 'videos' field using arrayUnion to add the new video to the existing videos array
    await updateDoc(docRef, {
      videos: videoData,
    })

    return console.log('Video added successfully to the basics document!')
  } catch (error) {
    return console.error('Error adding video to basics document:', error)
  }
}
