import DetailTemplate from '../../detail-template'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function InternationalTourDetailPage({ params }: Props) {
  const { slug } = await params
  return <DetailTemplate category="international" slug={slug} />
}
