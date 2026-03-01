import DetailTemplate from '../../detail-template'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function HoneymoonTourDetailPage({ params }: Props) {
  const { slug } = await params
  return <DetailTemplate category="honeymoon" slug={slug} />
}
