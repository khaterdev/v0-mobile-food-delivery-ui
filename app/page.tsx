import type React from "react"
import Image from "next/image"
import {
  Search,
  MapPin,
  Bell,
  Home,
  Compass,
  ShoppingBag,
  User,
  ChevronRight,
  Star,
  Clock,
  Filter,
  Heart,
  Percent,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">Deliver to</p>
              <p className="text-xs text-gray-500">Nasr City, Cairo</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>
            <Avatar className="h-9 w-9 border-2 border-teal-500">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Profile" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search for food or restaurants"
            className="pl-10 pr-16 py-6 bg-gray-100 border-none rounded-xl shadow-sm"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white"
          >
            <Filter className="h-4 w-4 mr-1" /> Filters
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto pb-20">
        {/* Welcome Message */}
        <section className="px-4 pt-4">
          <h1 className="text-2xl font-bold">Hello, Ahmed! 👋</h1>
          <p className="text-gray-500">What would you like to eat today?</p>
        </section>

        {/* Promotions Carousel */}
        <section className="px-4 mt-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-3 pb-2">
              <div className="relative w-[280px] h-[160px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
                  alt="Special offer on pizza"
                  width={280}
                  height={160}
                  className="object-cover h-full w-full brightness-[0.7]"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <Badge className="self-start bg-gradient-to-r from-red-500 to-orange-500 text-white border-none px-3 py-1.5">
                    50% OFF
                  </Badge>
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Pizza Festival</h3>
                    <p className="text-sm">Order now & save big!</p>
                    <Button size="sm" className="mt-2 bg-white text-red-500 hover:bg-gray-100">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative w-[280px] h-[160px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1000&auto=format&fit=crop"
                  alt="Egyptian koshary promotion"
                  width={280}
                  height={160}
                  className="object-cover h-full w-full brightness-[0.7]"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <Badge className="self-start bg-gradient-to-r from-teal-500 to-emerald-500 text-white border-none px-3 py-1.5">
                    Buy 1 Get 1
                  </Badge>
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Authentic Koshary</h3>
                    <p className="text-sm">Limited time offer!</p>
                    <Button size="sm" className="mt-2 bg-white text-teal-500 hover:bg-gray-100">
                      Claim Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative w-[280px] h-[160px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000&auto=format&fit=crop"
                  alt="Seafood festival"
                  width={280}
                  height={160}
                  className="object-cover h-full w-full brightness-[0.7]"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <Badge className="self-start bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none px-3 py-1.5">
                    New
                  </Badge>
                  <div className="text-white">
                    <h3 className="font-bold text-xl">Seafood Festival</h3>
                    <p className="text-sm">Fresh from Alexandria!</p>
                    <Button size="sm" className="mt-2 bg-white text-purple-500 hover:bg-gray-100">
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Quick Actions */}
        <section className="px-4 mt-6 grid grid-cols-4 gap-2">
          <QuickAction
            icon={<Percent className="h-5 w-5 text-white" />}
            label="Offers"
            bgColor="from-orange-400 to-red-500"
          />
          <QuickAction
            icon={<Clock className="h-5 w-5 text-white" />}
            label="Fast Delivery"
            bgColor="from-teal-400 to-emerald-500"
          />
          <QuickAction
            icon={<Star className="h-5 w-5 text-white" />}
            label="Top Rated"
            bgColor="from-purple-400 to-indigo-500"
          />
          <QuickAction
            icon={<Heart className="h-5 w-5 text-white" />}
            label="Favorites"
            bgColor="from-pink-400 to-rose-500"
          />
        </section>

        {/* Categories Tabs */}
        <section className="px-4 mt-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full bg-gray-100 p-1 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg flex-1">
                All
              </TabsTrigger>
              <TabsTrigger value="egyptian" className="rounded-lg flex-1">
                Egyptian
              </TabsTrigger>
              <TabsTrigger value="fast-food" className="rounded-lg flex-1">
                Fast Food
              </TabsTrigger>
              <TabsTrigger value="healthy" className="rounded-lg flex-1">
                Healthy
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-4 pb-2">
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=200&auto=format&fit=crop"
                    name="Koshary"
                    count="43"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=200&auto=format&fit=crop"
                    name="Shawarma"
                    count="38"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1593560708920-61b98ae52d42?q=80&w=200&auto=format&fit=crop"
                    name="Falafel"
                    count="29"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=200&auto=format&fit=crop"
                    name="Seafood"
                    count="52"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200&auto=format&fit=crop"
                    name="Pizza"
                    count="64"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop"
                    name="Burgers"
                    count="47"
                  />
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="egyptian" className="mt-4">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-4 pb-2">
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=200&auto=format&fit=crop"
                    name="Koshary"
                    count="43"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1593560708920-61b98ae52d42?q=80&w=200&auto=format&fit=crop"
                    name="Falafel"
                    count="29"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1611275484845-52a71f2b0a6a?q=80&w=200&auto=format&fit=crop"
                    name="Molokhia"
                    count="18"
                  />
                  <CategoryItem
                    image="https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?q=80&w=200&auto=format&fit=crop"
                    name="Mahshi"
                    count="21"
                  />
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </section>

        {/* Continue Your Order */}
        <section className="px-4 mt-6">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-xl border border-teal-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Continue Your Order</h2>
              <Button variant="ghost" className="text-teal-500 text-sm p-0">
                View Cart
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=200&auto=format&fit=crop"
                alt="Koshary El Tahrir"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">Koshary El Tahrir</h3>
                <p className="text-xs text-gray-500">2 items • 120 EGP</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="outline" className="text-xs bg-teal-50 text-teal-600 border-teal-200">
                    <Clock className="h-3 w-3 mr-1" /> 15 min
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-orange-50 text-orange-600 border-orange-200">
                    Preparing
                  </Badge>
                </div>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
                Track
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Restaurants */}
        <section className="px-4 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Popular Restaurants</h2>
            <Button variant="ghost" className="text-teal-500 text-sm p-0 flex items-center">
              See All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4">
            <RestaurantCard
              name="El Dahan Grill"
              image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop"
              rating={4.8}
              reviewCount={342}
              deliveryTime="25-35"
              deliveryFee="15 EGP"
              cuisine="Egyptian Grill"
              promoted={true}
            />
            <RestaurantCard
              name="Cairo Kitchen"
              image="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=400&auto=format&fit=crop"
              rating={4.6}
              reviewCount={218}
              deliveryTime="20-30"
              deliveryFee="Free Delivery"
              cuisine="Traditional Egyptian"
              discount="30% OFF"
            />
            <RestaurantCard
              name="Alexandria Seafood"
              image="https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=400&auto=format&fit=crop"
              rating={4.7}
              reviewCount={156}
              deliveryTime="30-45"
              deliveryFee="25 EGP"
              cuisine="Seafood"
            />
          </div>
        </section>

        {/* Recommended For You */}
        <section className="px-4 mt-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Recommended For You</h2>
            <Button variant="ghost" className="text-teal-500 text-sm p-0 flex items-center">
              See All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="w-full">
            <div className="flex gap-4 pb-2">
              <FoodItemCard
                name="Mixed Grill Platter"
                restaurant="El Dahan Grill"
                price="220"
                image="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=300&auto=format&fit=crop"
                rating={4.9}
                discount="15% OFF"
              />
              <FoodItemCard
                name="Classic Koshary"
                restaurant="Abou Tarek"
                price="65"
                image="https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=300&auto=format&fit=crop"
                rating={4.8}
                bestSeller={true}
              />
              <FoodItemCard
                name="Seafood Mix"
                restaurant="Alexandria Seafood"
                price="280"
                image="https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=300&auto=format&fit=crop"
                rating={4.7}
              />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </main>

      {/* Floating Cart Button */}
      <div className="fixed bottom-20 right-4 z-10">
        <Button className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg flex items-center justify-center relative">
          <ShoppingBag className="h-6 w-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </Button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-6 py-2 shadow-lg">
        <div className="flex justify-between items-center">
          <NavItem icon={<Home className="h-6 w-6" />} label="Home" active />
          <NavItem icon={<Compass className="h-6 w-6" />} label="Explore" />
          <NavItem icon={<ShoppingBag className="h-6 w-6" />} label="Orders" />
          <NavItem icon={<User className="h-6 w-6" />} label="Profile" />
        </div>
      </nav>
    </div>
  )
}

function QuickAction({ icon, label, bgColor }: { icon: React.ReactNode; label: string; bgColor: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${bgColor} flex items-center justify-center shadow-sm`}>
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  )
}

function CategoryItem({ image, name, count }: { image: string; name: string; count: string }) {
  return (
    <div className="flex flex-col items-center gap-2 w-20">
      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-teal-500 to-emerald-500 p-0.5">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-center">
        <span className="text-xs font-medium block">{name}</span>
        <span className="text-[10px] text-gray-500">{count} places</span>
      </div>
    </div>
  )
}

function RestaurantCard({
  name,
  image,
  rating,
  reviewCount,
  deliveryTime,
  deliveryFee,
  cuisine,
  promoted = false,
  discount = null,
}: {
  name: string
  image: string
  rating: number
  reviewCount: number
  deliveryTime: string
  deliveryFee: string
  cuisine: string
  promoted?: boolean
  discount?: string | null
}) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={150}
            className="w-full h-[150px] object-cover"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {promoted && (
              <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none">Promoted</Badge>
            )}
            {discount && (
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-none">{discount}</Badge>
            )}
          </div>
          <Badge className="absolute top-3 right-3 bg-white text-black font-medium px-2 py-1 flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {rating} ({reviewCount})
          </Badge>
          <div className="absolute -bottom-4 right-3">
            <Button
              size="sm"
              className="rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 shadow-md h-8 w-8 p-0"
            >
              <Heart className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-xs text-gray-500">{cuisine}</p>
              <div className="flex items-center gap-3 mt-2">
                <Badge variant="outline" className="text-xs bg-gray-50 border-gray-200 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {deliveryTime} min
                </Badge>
                <Badge
                  variant="outline"
                  className={`text-xs ${deliveryFee === "Free Delivery" ? "bg-teal-50 text-teal-600 border-teal-200" : "bg-gray-50 border-gray-200"}`}
                >
                  {deliveryFee}
                </Badge>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">Order</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function FoodItemCard({
  name,
  restaurant,
  price,
  image,
  rating,
  discount = null,
  bestSeller = false,
}: {
  name: string
  restaurant: string
  price: string
  image: string
  rating: number
  discount?: string | null
  bestSeller?: boolean
}) {
  return (
    <div className="w-[180px] rounded-xl overflow-hidden shadow-md bg-white">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={180}
          height={120}
          className="w-full h-[120px] object-cover"
        />
        <div className="absolute top-2 left-2">
          {discount && (
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-none text-xs">
              {discount}
            </Badge>
          )}
          {bestSeller && (
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-none text-xs">
              Best Seller
            </Badge>
          )}
        </div>
        <div className="absolute -bottom-3 right-2">
          <Button
            size="sm"
            className="rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 shadow-md h-7 w-7 p-0"
          >
            <ShoppingBag className="h-3 w-3 text-white" />
          </Button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1">{name}</h3>
        <p className="text-xs text-gray-500">{restaurant}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-bold text-sm">{price} EGP</p>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`${active ? "text-teal-500" : "text-gray-500"}`}>{icon}</div>
      <span className={`text-xs mt-1 ${active ? "text-teal-500 font-medium" : "text-gray-500"}`}>{label}</span>
      {active && <div className="h-1 w-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-1" />}
    </div>
  )
}
