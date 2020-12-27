import React, { ComponentProps, FormEvent, useState, useEffect } from "react";
import Link from "next/link"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { history } from "../../utils/config";
import {useRouter} from "next/router"
import { Header, Logo, IconButton, Menu, Search, InputGradient, Form, SliderContainer, SliderGradient, SliderText} from "./styles"

const HeaderComponent = (props: ComponentProps<any>) => {
  const [visible, setVisible] = useState(true)
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const routerHook = useRouter()
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) setVisible(false)
      if (window.scrollY < 150) setVisible(true)
      if (routerHook.pathname !== "/") setVisible(false)
    })
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    if (routerHook.pathname !== "/") setVisible(true)
  };
  const formControl = (event: any) => setValue(event.target.value)
  const search = (text: string) => {
    // this.props.store.searchPhoto(text);
  }
  const formSubmit = (event: FormEvent) => {
    event.preventDefault();
    search(value);
  };
  const onFocus = () => setFocus(true)
  const onBlur = () => {
    if (value === "") setFocus(false)
  };
    return (
      <Header visible={visible}>
          <Link href="/">
            <Logo>
                <img src="/images/Vector.svg" alt="logo" />
                <span>ImageStock</span>
            </Logo>
          </Link>
          <Menu>
            {!visible ? (
              <Link href="/">
                <IconButton onClick={scrollToTop}>
                    <img src="/images/search.svg" />
                    <span>Поиск</span>
                </IconButton>
              </Link>
            ) : null}
            <Link href="/favorites">
              <IconButton>
                <img src="/images/favorite.svg" alt="favorites" />
                <span>Избранное</span>
              </IconButton>
            </Link>
            <Link href="/history">
              <IconButton>
                <>
                  <img src="/images/history.png" alt="history" />
                  <span>История поиска</span>
                </>
              </IconButton>
            </Link>
          </Menu>
          <Search visible={visible}>
            <Form onSubmit={formSubmit}>
              {!focus ? <span>Поиск</span> : null}
              <input
                onChange={formControl}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <InputGradient/>
            </Form>
            <SliderContainer>
              <SliderGradient/>
              <CarouselProvider totalSlides={history.length} 
                                naturalSlideHeight={10} 
                                naturalSlideWidth={50}
                                visibleSlides={5}>
                <Slider>
                  {history.map((item, i: number) => (
                    <Slide key={i} index={i} tag="div" innerTag="span">
                      <span onClick={search.bind(null, item.toString())}>{item}</span>
                    </Slide>
                  ))}
                </Slider>
              </CarouselProvider>
            </SliderContainer>
          </Search>
      </Header>
    );
}

export default HeaderComponent
