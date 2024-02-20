import { LucidePlus, LucideSearch, LucideFileDown, LucideMoreHorizontal } from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Control, Input } from './components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'

export function App() {

	return (
		<div className="py-10 space-y-8">
			<div>
				<Header />
				<Tabs />
			</div>

			<main className="max-w-6xl mx-auto space-y-5">
				<div className="flex items-center gap-3">
					<h1 className="text-xl font-bold">Tags</h1>
					<Button variant='primary'>
						<LucidePlus className="size-3" />
						Create new
					</Button>
				</div>

				<div className="flex items-center justify-between">
					<Input variant='filter'>
						<LucideSearch className='size-3' />
						<Control placeholder='Search tags...' />
					</Input>
					<Button>
						<LucideFileDown className='size-3' />
						Export
					</Button>

				</div>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead></TableHead>
							<TableHead>Tags</TableHead>
							<TableHead>Amount of videos</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						<TableRow>
							<TableCell></TableCell>
							<TableCell>
								<div className='flex flex-col gap-0.5'>
									<span className='font-medium'>React</span>
									<span className='text-xs text-zinco-500'>T5P-HJ5U685HNH-5U8568GB5</span>
								</div>
							</TableCell>
							<TableCell className='text-zinco-300'>
								13 video(s)
							</TableCell>
							<TableCell className='text-right'>
								<Button className='icon'>
									<LucideMoreHorizontal className='size-4' />
								</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>

			</main>

		</div>
	)
}
