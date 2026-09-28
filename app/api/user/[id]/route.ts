type Props = { params: Promise<{ id: string }> };
export async function GET(request: Request, { params }: Props) {
  const { id } = await params;
  return Response.json({ userId: id });
}
