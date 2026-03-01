import DetailTemplate from '../../detail-template'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function LocalTourDetailPage({ params }: Props) {
  const { slug } = await params
  return <DetailTemplate category="local" slug={slug} />
}
