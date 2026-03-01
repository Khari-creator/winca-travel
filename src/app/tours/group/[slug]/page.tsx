import DetailTemplate from '../../detail-template'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function GroupTourDetailPage({ params }: Props) {
  const { slug } = await params
  return <DetailTemplate category="group" slug={slug} />
}
