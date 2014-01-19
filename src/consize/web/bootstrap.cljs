(ns consize.web.bootstrap
	(:use [consize.web.filesystem :only [slurp spit]]))

(defn ^:export init []
	(spit "bootimage.txt" "emptystack emptystack \\ call/cc push emptystack \\ continue push \\ concat push \\ rot push \\ unpush push \\ swap push push push \\ call push emptystack \\ call push \\ choose push push \\ if push emptystack \\ call/cc push emptystack \\ continue push \\ scan4] push push \\ { push \\ \\ push push \\ { push emptystack \\ call/cc push emptystack \\ continue push \\ scan4] push push \\ [ push \\ \\ push push \\ [ push emptystack \\ if push emptystack push push \\ when push emptystack \\ call/cc push emptystack \\ continue push \\ def+ push \\ destruct-definition push \\ scan4; push \\ swap push emptystack push push push \\ : push emptystack push \\ read-mapping push emptystack \\ call push \\ get push emptystack \\ drop push push emptystack emptystack \\ drop push \\ swap push push \\ f push mapping push \\ rot push push \\ choose push emptystack \\ case push emptystack emptystack \\ look4) push \\ swap push \\ cons push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ look4) push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ swap push \\ reverse push \\ swap push \\ drop push push \\ ) push emptystack \\ _|_ push emptystack \\ effect push \\ stack push \\ incomplete push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ look4) push emptystack \\ -rot push \\ dup push \\ swap push push \\ over push emptystack \\ top push \\ swap push \\ pop push \\ dup push push \\ unpush push emptystack \\ push push \\ swap push push \\ cons push emptystack \\ call push \\ get push \\ get push emptystack push \\ over push \\ :else push push \\ case push emptystack \\ parse-quot push \\ when push emptystack \\ look4) push \\ pop push push \\ equal? push \\ ( push \\ \\ push \\ top push \\ dup push \\ swap push emptystack push \\ uncons push push \\ destruct-definition push emptystack \\ rot push \\ rot push push \\ -rot push emptystack \\ pop push \\ swap push \\ top push \\ dup push push \\ uncons push emptystack \\ call/cc push emptystack \\ continue push \\ scan4] push push \\ ( push \\ \\ push push \\ ( push emptystack \\ case push emptystack emptystack \\ scan4[ push \\ rot push emptystack push \\ drop push push \\ } push emptystack \\ scan4[ push \\ rot push emptystack push \\ drop push push \\ ] push emptystack \\ scan4] push \\ swap push \\ push push \\ \\ push \\ \\ push \\ cons push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ scan4] push \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ { push emptystack \\ scan4] push \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ [ push emptystack \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ scan4[ push \\ rot push emptystack push \\ drop push push \\ ) push emptystack \\ scan4] push \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ ( push emptystack \\ _|_ push emptystack \\ brackets push \\ unbalanced push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ scan4] push emptystack \\ def push \\ drop push \\ swap push push \\ def+ push emptystack \\ set-dict push \\ assoc push \\ get-dict push \\ swap push push \\ def push emptystack \\ reverse push \\ apply push \\ swap push emptystack push \\ func push \\ get-dict push push \\ fcall push emptystack \\ case push emptystack emptystack \\ scan4[ push \\ swap push \\ push push \\ \\ push \\ \\ push \\ cons push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ swap push \\ push push \\ mapping push \\ fcall push \\ swap push \\ drop push push \\ { push emptystack \\ swap push \\ push push \\ swap push \\ drop push push \\ [ push emptystack \\ scan4[ push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ swap push \\ push push \\ fcall push \\ swap push \\ drop push push \\ ( push emptystack \\ _|_ push emptystack \\ brackets push \\ unbalanced push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ scan4[ push emptystack \\ case push emptystack emptystack \\ scan4; push \\ swap push \\ cons push \\ push push \\ \\ push \\ \\ push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ reverse push \\ swap push \\ drop push push \\ ; push emptystack \\ scan4; push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ _|_ push emptystack \\ definition push \\ incomplete push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ scan4; push emptystack \\ call push \\ reverse push \\ push push \\ ] push \\ \\ push \\ reverse push \\ push push \\ [ push \\ \\ push push \\ parse-quot push emptystack \\ call/cc push emptystack \\ continue push \\ concat push \\ swap push \\ push push \\ : push \\ \\ push \\ cons push \\ push push \\ \\ push \\ \\ push \\ cons push emptystack \\ ; push push \\ dup push \\ unpush push push push \\ SYMBOL: push emptystack push \\ read-word push mapping get-dict merge set-dict
")

	(spit "prelude.txt" "%%% A Prelude for Consize in Consize
%%% Copyright (c) 2013, Dominikus Herzberg, Heilbronn University
%%% New BSD License: http://opensource.org/licenses/BSD-3-Clause
%%%
%%% Consize is very much inspired by Factor, see http://factorcode.org.
%%% Links to Factor's documentation help you compare the languages.

% A TINY BOOTIMAGE

\\ bootimage.txt run

% DEFINITION OF META-WORDS

: read-word    ( wrd -- wrd ) ;
: read-mapping ( map -- map ) ;

% STACK SHUFFLING

: 2drop ( x y -- ) drop drop ;
: 3drop ( x y z -- ) drop drop drop ;
: 2dup ( x y -- x y x y ) over over ;
: 3dup ( x y z -- x y z x y z ) pick pick pick ;
: dupd ( x y -- x x y ) swap dup rot ;    % dup deep
: swapd ( x y z -- y x z ) swap rot rot ; % swap deep
: -rot ( x y z -- z x y ) rot rot ;
: rot4 ( x y z u -- y z u x ) [ rot ] dip swap ;
: -rot4 ( x y z u -- u x y z ) swap [ -rot ] dip ;
: over ( x y -- x y x ) swap dup -rot ;
: 2over ( x y z -- x y z x y ) rot dup -rot4 rot dup -rot4 ;
: nip ( x y -- y ) swap drop ;
: 2nip ( x y z -- z ) nip nip ;
: pick ( x y z -- x y z x ) rot dup [ -rot ] dip ;

% FRIENDS & HELPERS

: swapu ( itm stk -- stk' ) cons ; % deprecated
: cons ( itm stk -- [ itm & stk ] ) swap push ;
: uncons ( [ itm & stk ] -- itm stk ) dup top swap pop ;
: unpush ( [ itm & stk ] -- stk itm ) dup pop swap top ;
: empty? ( stk -- t/f ) ( ) equal? ;
: size ( seq -- n ) dup empty? [ drop 0 ] [ pop size 1 + ] if ;
: time ( quot -- ... msecs )
  current-time-millis swap dip current-time-millis swap - ;

: nil ( -- nil ) ( ) top ;
: lookup ( word -- item ) get-dict nil get ;
: delete ( itm -- ) get-dict dissoc set-dict ;
: values ( dict -- seq ) dup keys swap [ nil get ] cons map ;

% CALL A QUOTATION (ANONYMOUS ABSTRACTION)
% http://docs.factorcode.org/content/article-combinators.html
% http://docs.factorcode.org/content/article-call.html

: call ( [ quot & ds ] cs -- ds quot cs concat )
  [ swap unpush rot concat continue ] call/cc ;
: fcall ( quot -- seq ) get-dict func ( ) swap apply reverse ;

% BOOLEAN VALUES, BOOLEAN CHOICE
% http://docs.factorcode.org/content/article-booleans.html

: true  ( -- t ) \\ t ;
: false ( -- f ) \\ f ;

SYMBOL: t
SYMBOL: f

: choose ( f/* this that -- that/this )
  rot { \\ f [ swap drop ] } [ drop ] get call ;

: and ( f/* f/* -- t/f ) over choose ; % Factor
: or  ( f/* f/* -- t/f ) dupd choose ; % Factor
: xor ( f/* f/* -- t/f ) [ f swap choose ] when* ; % Factor
: not ( f/* -- t/f ) false true choose ;

% CONDITIONAL COMBINATORS
% http://docs.factorcode.org/content/article-conditionals.html

: if ( f/* then else -- ... ) choose call ;
: if-not ( f/* then else -- ... ) swap if ;
: when ( f/* then -- ... ) [ ] if ;
: unless ( f/* else -- ... ) [ ] if-not ;

: if* ( f/* then else -- ... )
  pick [ drop call ] [ 2nip call ] if ; % Factor
: when* ( f/* then -- ... ) over [ call ] [ 2drop ] if ; % Factor
: unless* ( f/* else -- ... ) over [ drop ] [ nip call ] if ; % Factor

SYMBOL: :else
: case ( val { val' quot ... } -- ... )
  :else over [ ] get get call ;

: cond ( [ test1 then1 test2 then3 ... else ] -- ... )
  dup empty?                 % anything left to test?
    [ drop ]                 % no: quit
    [ uncons dup empty?      % only one quotation left?
      [ drop call ]          % yes: call 'else'
      [ uncons               % otherwise:
        [ ] \\ cond push cons % prepare 'cond' recursion
        [ call ] 2dip if ]   % call 'testN' and apply 'if'
    if ]
  if ;

% DATAFLOW COMBINATORS
% http://docs.factorcode.org/content/article-dataflow-combinators.html

% CALL A QUOTATION AND HIDE ITEMS UNDERNEATH
% http://docs.factorcode.org/content/article-dip-keep-combinators.html

: dip ( x quot -- x ) [ ] rot push \\ \\ push concat call ;
: 2dip ( x y quot -- x y ) swap [ dip ] dip ;
: 3dip ( x y z quot -- x y z ) swap [ 2dip ] dip ;
: 4dip ( w x y z quot -- w x y z ) swap [ 3dip ] dip ;

% CALL A QUOTATION AND RESTORE ITEMS ON DATASTACK
% http://docs.factorcode.org/content/article-dip-keep-combinators.html

: keep  ( x quot -- x ) [ dup ] dip dip ;
: 2keep ( x y quot -- x y ) [ 2dup ] dip 2dip ;
: 3keep ( x y z quot -- x y z ) [ 3dup ] dip 3dip ;

% CALL 2, 3 QUOTATIONS IN SEQUENCE, RESTORE ITEM(S) FOR NEXT CALL
% http://docs.factorcode.org/content/article-cleave-combinators.html
% 'The cleave combinators apply multiple quotations to a single
% value or set of values.' [Factor]

: bi ( x p q -- ) [ keep ] dip call ;
: 2bi ( x y p q -- ) [ 2keep ] dip call ;
: 3bi ( x y z p q -- ) [ 3keep ] dip call ;

: tri ( x p q r -- ) [ [ keep ] dip keep ] dip call ;
: 2tri ( x y p q r -- ) [ [ 2keep ] dip 2keep ] dip call ;
: 3tri ( x y z p q r -- ) [ [ 3keep ] dip 3keep ] dip call ;

: cleave ( x [ p q ... ] -- ) [ keep ] each drop ;
: 2cleave ( x y [ p q ... ] -- ) [ 2keep ] each 2drop ;
: 3cleave ( x y z [ p q ... ] -- ) [ 3keep ] each 3drop ;

% CALL 1ST QUOTATION ON 1ST ITEM, 2ND QUOTATION ON 2ND ITEM
% http://docs.factorcode.org/content/article-spread-combinators.html
% 'The spread combinators apply multiple quotations to multiple
% values. The asterisk (*) suffixed to these words' names
% signifies that they are spread combinators.' [Factor]

% : bi* ( #X #Y [ @P ] [ @Q ] ==> #X [ @P ] | call \\ #Y [ @Q ] call )
% : bi* ( #X #Y [ @P ] [ @Q ] ==> #X | @P \\ #Y @Q )
: bi* ( x y p q -- ) [ dip ] dip call ;
: 2bi* ( w x y z p q -- ) [ 2dip ] dip call ;

% : tri* ( x y z p q r -- ) [ [ 2dip ] dip dip ] dip call ; % Factor
: tri* ( x y z p q r -- ) [ 2dip ] 2dip bi* ;
: 2tri* ( u v w x y z p q r -- ) [ 4dip ] 2dip 2bi* ;

: SPREAD ( [ quot1 ... quotn ] -- ... ) % def inspired by Factor
  ( ) [ swap dup empty?
          [ drop ]
          [ [ dip ] rot concat cons ]
        if ]
  reduce ;

: spread ( itm1 ... itmn [ quot1 ... quotn ] -- ... ) SPREAD call ;

% CALL ONE QUOTATION ON MULTIPLE ITEMS
% http://docs.factorcode.org/content/article-apply-combinators.html
% 'The apply combinators apply a single quotation to multiple values.
%  The at sign (@) suffixed to these words' names signifies that they
%  are apply combinators.' [Factor]

: bi@ ( x y quot -- ) dup bi* ;
: 2bi@ ( w x y z quot -- ) dup 2bi* ;
: tri@ ( x y z quot -- ) dup dup tri* ;
: 2tri@ ( u v w x y z quot -- ) dup dup 2tri* ;

: both? ( x y pred -- t/f ) bi@ and ;
: either? ( x y pred -- t/f ) bi@ or ;

% SEQUENCE COMBINATORS
% http://docs.factorcode.org/content/article-sequences-combinators.html

: each ( seq quot -- ... )
  swap dup empty?
    [ 2drop ]
    [ unpush -rot over [ call ] 2dip each ]
  if ;

: unstack ( stk -- ... ) ( ) each ;

: 2each ( stk1 stk2 quot -- ... )
  \\ unstack push [ zip ] dip each ;
: 3each ( stk1 stk2 stk3 quot -- ... )
  \\ unstack push [ 3zip ] dip each ;

: map ( seq quot -- seq' )
  [ push ] concat ( ) -rot each reverse ;
: reduce ( seq identity quot -- res ) swapd each ;

: sum ( [ x ... z ] -- sum ) 0 [ + ] reduce ;
: prod ( [ x ... z ] -- prod ) 1 [ * ] reduce ;
: cat ( [ seq1 ... seq2 ] -- seq ) ( ) [ concat ] reduce ;

: any? ( seq pred -- t/f ) map f [ or ] reduce ;
: all? ( seq pred -- t/f ) map t [ and ] reduce ;

: 2map ( seq1 seq2 quot -- seq ) [ zip ] dip \\ unstack push map ;
: 3map ( seq1 seq2 seq3 quot -- seq ) [ 3zip ] dip \\ unstack push map ;
: 2reduce ( seq1 seq2 identity quot -- res )
  [ zip ] 2dip \\ unstack push reduce ;
: 3reduce ( seq1 seq2 seq3 identity quot -- res )
  [ 3zip ] 2dip \\ unstack push reduce ;

: zip ( stk1 stk2 -- stk )
  2dup [ empty? ] bi@ or
    [ 2drop ( ) ]
    [ unpush ( ) cons  rot
      unpush rot cons -rot swap zip cons ]
   if ;

: 3zip ( stk1 stk2 stk3 -- stk ) zip zip [ unstack cons ] map ;
: 4zip ( stk1 stk2 stk3 stk4 -- stk ) 3zip zip [ unstack cons ] map ;

: filter ( seq pred -- seq' ) % pred is a quotation
  ( ) -rot [ keep and [ push ] when* ] cons each reverse ;

: remove ( seq quot -- seq' ) [ not ] concat filter ;

% LOOPING COMBINATORS
%
% http://docs.factorcode.org/content/article-looping-combinators.html

: loop ( pred -- ... ) [ call ] keep [ loop ] curry when ;
: do ( pred quot -- pred quot ) dup 2dip ;
: while ( pred quot -- ... ) swap do concat [ loop ] curry when ;
: until ( pred quot -- ... ) [ [ not ] concat ] dip while ;

: [a,b] ( a b -- seq )
  ( ) -rot [ 2dup <= ] [ rot over push -rot 1 - ] while 2drop ;
: [a,b) ( a b -- seq ) 1 - [a,b] ;

: X ( quot -- ... ) dup call ;

: Y ( val quot -- res )
  [ [ [ call ] 2keep -rot dupd equal? ] dip
    swap [ drop nip ] [ swapd X ] if ] X ;

% COMPOSITIONAL COMBINATORS
%
% http://docs.factorcode.org/content/article-compositional-combinators.html
: curry ( itm quot -- quot ) cons \\ \\ push ;
: 2curry ( itm1 itm1 quot -- quot ) curry curry ;
: 3curry ( itm1 itm2 itm3 quot -- quot ) curry curry curry ;

% ENHANCE 'GRAMMAR' (BRACKET PARSER)

: [ ( -- quot ) \\ [ [ scan4] continue ] call/cc ;
: ( ( -- seq  ) \\ ( [ scan4] continue ] call/cc ;
: { ( -- map  ) \\ { [ scan4] continue ] call/cc ;

: scan4] ( ds cs -- ds' cs' )
  unpush dup
  { \\ ]   [ drop ( ) rot scan4[ ]
    \\ }   over
    \\ )   over
    \\ [   [ rot cons swap scan4] scan4] ]
    \\ {   over
    \\ (   over
    \\ \\   [ drop unpush rot cons \\ \\ push swap scan4] ]
    :else [ rot cons swap scan4] ]
    nil   [ \\ syntax-error [ unbalanced brackets ] _|_ ]
  } case ;

: scan4[ ( cs' stk ds' -- ds'' cs'' )
  unpush dup
  { \\ [   [ drop swap               push swap ]
    \\ {   [ drop swap fcall mapping push swap ]
    \\ (   [ drop swap fcall         push swap ]
    \\ \\   [ drop unpush rot cons \\ \\ push swap scan4[ ]
    :else [ rot cons swap scan4[ ]
    nil   [ \\ syntax-error [ unbalanced brackets ] _|_ ]
  } case ;

: parse-quot ( quot -- quot' )
  \\ [ push reverse \\ ] push reverse call ;

% WRITE PROGRAMS, DEFINE WORDS

: def ( wrd itm -- ) swap get-dict assoc set-dict ;
: def+ ( wrd [ effect ] [ body ] -- ) swap drop def ;

: : ( | ... '; -- quot )
  [ ( ) swap scan4; destruct-definition def+ continue ] call/cc ;

: scan4; ( ds [ ] cs -- ds cs' quot )
  unpush dup
  { \\ ;   [ drop swap reverse ]
    \\ \\   [ drop unpush rot \\ \\ push cons swap scan4; ]
    :else [ rot cons swap scan4; ]
    nil   [ \\ syntax-error [ incomplete definition ] _|_ ]
  } case ;

: destruct-definition ( quot -- wrd stackeffect body )
  uncons                % extract word
  ( ) swap              % prepare extraction of stack effect
  dup top \\ ( equal?    % extract stack effect
    [ pop look4) ] when % if given
  parse-quot ;          % and parse quotation

: look4) ( [ ... ] quot -- [ ... ]' quot' )
  unpush dup
  { \\ )   [ drop swap reverse swap ]
    \\ \\   [ drop unpush rot cons swap look4) ]
    :else [ rot cons swap look4) ]
    nil   [ \\ syntax-error [ incomplete stack effect ] _|_ ]
  } case ;

: SYMBOL: ( | itm -- )
  [ unpush dup ( \\ ; ) cons \\ \\ push cons \\ : push
    swap concat continue ] call/cc ;

% PRINTING

: <space> ( -- space ) \\space char ;
: <newline> ( -- newline ) \\newline char ;

: println ( -- ) print <newline> print flush ;

: repr ( itm -- wrd )
  dup type
  { \\ wrd [ ]
    \\ stk [ ( ) \\ [ push <space> push swap
            [ repr push <space> push ] each
            \\ ] push reverse word ]
    \\ map [ unmap ( ) \\ { push <space> push swap
            [ repr push <space> push ] each
            \\ } push reverse word ]
    \\ fct [ drop \\ <fct> ]
    \\ nil [ drop \\ nil ]
    :else [ \\ repr-error [ unknown type ] _|_ ]
  } case ;

: unbracket-stk-repr ( wrd -- wrd' ) % '[ ... ]' => '...'
  unword
    pop pop reverse pop pop reverse
    dup empty? [ <space> push ] when
  word ;

% INTERACTIVITY

: reader ( -- quot )
  \\ > print <space> print flush read-line
  ( ) <newline> push cons word
  uncomment tokenize ;

: evaluator call ;

: printer ( -- )
  get-ds reverse repr unbracket-stk-repr println ;

: repl reader evaluator printer repl ;

% READING FILES

: load ( wrd -- quot ) slurp uncomment tokenize ;
: lload ( wrd -- quot ) slurp undocument uncomment tokenize ;
: run ( wrd -- ... ) load call ;
: lrun ( wrd -- ... ) lload call ;

: prelude ( -- ... ) \\ prelude.txt run ;
: test-prelude ( -- ... ) \\ prelude-test.txt run ;

% REFLECTION

: source ( word -- ) lookup repr println ;

: get-ds ( -- stk ) [ swap dup push swap continue ] call/cc ;
: set-ds ( stk -- ) [ swap top swap continue ] call/cc ;
: clear ( -- ) ( ) set-ds ;

: abort ( -- ) [ drop [ printer repl ] continue ] call/cc ;
: exit  ( -- ) [ drop ( ) continue ] call/cc ;

% DEBUGGING

: break ( -- ds cs ) [ printer repl ] call/cc ;
: error ( -- ) [ \\ error printer repl ] call/cc ;

: step ( ds cs -- ds' cs' )
  dup empty? [ get-dict -rot stepcc rot drop ] unless ;

% UNIT-TESTING

: unit-test ( result quot -- )
  [ \\ test print [ <space> print repr print ] bi@ ] 2keep
  [ fcall equal? ] 2keep
  rot
    [ <space> print \\ passed println 2drop ]
    [ <space> print \\ failed println \\ with print <space> print
      nip fcall repr println abort ]
  if ;

% SERIALIZATION & DUMPING

: serialize ( quot -- quot' )
  get-ds [ clear ] dip uncons
  [ -serialize- get-ds ] dip
  swap reverse push set-ds ;

: -serialize- ( item -- stream-of-items )
  dup type
  { \\ wrd [ \\ \\ swap ]
    \\ stk [ \\ emptystack swap reverse [ -serialize- \\ push ] each ]
    \\ map [ unmap -serialize- \\ mapping ]
    \\ nil [ drop \\ emptystack \\ top ]
    \\ fct [ drop \\ \\ \\ <non-serializeable-fct> ]
    :else [ \\ serialization-error [ invalid type ] _|_ ]
  } case ;

: dump ( dict filename -- )
  swap serialize [ get-dict merge set-dict ] concat
  repr unbracket-stk-repr swap spit ;

% BOOTSTRAPPING

: bootstrapping-dict ( -- dict )
  [ def def+
    cons uncons unpush -rot over
    SYMBOL: case when if choose call fcall
    scan4] scan4[ parse-quot destruct-definition
    : scan4; look4)
    read-word read-mapping ]
  (  \\ [  \\ (  \\ {  ) concat
  dup [ lookup ] map zip cat mapping ;

: bootimage ( -- )
  bootstrapping-dict \\ bootimage.txt dump ;

% HERE WE GO

: say-hi ( -- )
  [ This is Consize -- A Concatenative Programming Language ]
  ( ) [ push <space> push ] reduce
  pop reverse word println
  repl ;
")

	(spit "prelude-dump.txt" "emptystack emptystack \\ bi* push \\ 2dip push emptystack \\ 2dip push push push \\ tri* push \\ <non-serializeable-fct> push \\ >= push emptystack \\ call push \\ lload push push \\ lrun push \\ <non-serializeable-fct> push \\ dup push emptystack \\ call/cc push emptystack \\ repl push \\ printer push push push \\ break push emptystack \\ while push \\ dip push emptystack \\ concat push emptystack \\ not push push push push \\ until push emptystack \\ reduce push emptystack \\ and push push \\ t push \\ map push push \\ all? push emptystack \\ call/cc push emptystack \\ continue push \\ concat push \\ rot push \\ unpush push \\ swap push push push \\ call push emptystack \\ call/cc push emptystack \\ continue push emptystack push \\ drop push push push \\ exit push emptystack \\ and push \\ bi@ push push \\ both? push \\ <non-serializeable-fct> push \\ > push emptystack \\ swap push \\ dip push emptystack \\ rot push push push \\ rot4 push emptystack \\ call push \\ choose push push \\ if push emptystack \\ reverse push \\ each push \\ -rot push emptystack push \\ concat push emptystack \\ push push push push \\ map push emptystack \\ call/cc push emptystack \\ continue push \\ pop push \\ swap push \\ push push \\ swap push \\ rot push \\ top push \\ dup push push push \\ \\ push \\ <non-serializeable-fct> push \\ < push emptystack \\ if push emptystack \\ abort push \\ println push \\ repr push \\ fcall push \\ nip push \\ print push \\ <space> push \\ print push \\ with push \\ \\ push \\ println push \\ failed push \\ \\ push \\ print push \\ <space> push push emptystack \\ 2drop push \\ println push \\ passed push \\ \\ push \\ print push \\ <space> push push \\ rot push \\ 2keep push emptystack \\ equal? push \\ fcall push push \\ 2keep push emptystack \\ bi@ push emptystack \\ print push \\ repr push \\ print push \\ <space> push push \\ print push \\ test push \\ \\ push push push \\ unit-test push \\ <non-serializeable-fct> push \\ emptystack push \\ <non-serializeable-fct> push \\ tokenize push emptystack \\ call/cc push emptystack \\ continue push \\ scan4] push push \\ { push \\ \\ push push \\ { push emptystack \\ when* push emptystack \\ choose push \\ swap push \\ f push push push \\ xor push emptystack \\ call/cc push emptystack \\ continue push \\ scan4] push push \\ [ push \\ \\ push push \\ [ push \\ <non-serializeable-fct> push \\ operating-system push emptystack \\ println push \\ repr push \\ lookup push push \\ source push emptystack \\ call push \\ dip push emptystack \\ 3keep push push push \\ 3bi push emptystack \\ if push emptystack push push \\ when push \\ <non-serializeable-fct> push \\ type push \\ <non-serializeable-fct> push \\ push push emptystack \\ call/cc push emptystack \\ continue push \\ swap push \\ top push \\ swap push push push \\ set-ds push emptystack \\ get push \\ nil push \\ get-dict push push \\ lookup push emptystack \\ case push emptystack emptystack \\ mapping push \\ \\ push \\ -serialize- push \\ unmap push push \\ map push emptystack \\ <non-serializeable-fct> push \\ \\ push \\ \\ push \\ \\ push \\ drop push push \\ fct push emptystack \\ _|_ push emptystack \\ type push \\ invalid push push \\ serialization-error push \\ \\ push push \\ :else push emptystack \\ top push \\ \\ push \\ emptystack push \\ \\ push \\ drop push push \\ nil push emptystack \\ each push emptystack \\ push push \\ \\ push \\ -serialize- push push \\ reverse push \\ swap push \\ emptystack push \\ \\ push push \\ stk push emptystack \\ swap push \\ \\ push \\ \\ push push \\ wrd push mapping push \\ type push \\ dup push push \\ -serialize- push \\ <non-serializeable-fct> push \\ slurp push emptystack \\ call/cc push emptystack \\ continue push \\ def+ push \\ destruct-definition push \\ scan4; push \\ swap push emptystack push push push \\ : push emptystack \\ println push \\ unbracket-stk-repr push \\ repr push \\ reverse push \\ get-ds push push \\ printer push emptystack \\ or push \\ bi@ push push \\ either? push emptystack \\ call push \\ dip push emptystack \\ 2keep push push push \\ 2bi push emptystack \\ reduce push \\ push push \\ unstack push \\ \\ push \\ 2dip push emptystack \\ 3zip push push push \\ 3reduce push emptystack \\ dip push emptystack \\ dip push push \\ swap push push \\ 2dip push \\ <non-serializeable-fct> push \\ dissoc push emptystack \\ bi* push \\ dup push push \\ bi@ push emptystack \\ X push emptystack \\ if push emptystack \\ X push \\ swapd push push emptystack \\ nip push \\ drop push push \\ swap push \\ dip push emptystack \\ equal? push \\ dupd push \\ -rot push \\ 2keep push emptystack \\ call push push push push push \\ Y push emptystack \\ call push \\ dip push emptystack \\ 2keep push \\ dip push emptystack \\ 2keep push push push push \\ 2tri push emptystack \\ reverse push \\ each push \\ cons push emptystack \\ when* push emptystack \\ push push push \\ and push \\ keep push push \\ -rot push emptystack push push \\ filter push emptystack \\ dip push emptystack \\ 2dip push push \\ swap push push \\ 3dip push emptystack \\ if push emptystack \\ call push \\ nip push push emptystack \\ drop push push \\ over push push \\ unless* push emptystack \\ 3dip push \\ dip push emptystack \\ 3dup push push push \\ 3keep push emptystack \\ call push \\ dip push emptystack \\ 3keep push \\ dip push emptystack \\ 3keep push push push push \\ 3tri push emptystack \\ call push \\ dup push push \\ X push \\ <non-serializeable-fct> push \\ merge push emptystack \\ reduce push \\ push push \\ unstack push \\ \\ push \\ 2dip push emptystack \\ zip push push push \\ 2reduce push emptystack \\ dip push emptystack \\ 3dip push push \\ swap push push \\ 4dip push emptystack push \\ read-mapping push emptystack \\ reduce push emptystack \\ * push push \\ 1 push push \\ prod push emptystack \\ 2dip push \\ dip push emptystack \\ 2dup push push push \\ 2keep push emptystack \\ call push \\ get push emptystack \\ drop push push emptystack emptystack \\ drop push \\ swap push push \\ f push mapping push \\ rot push push \\ choose push emptystack \\ choose push \\ over push push \\ and push \\ <non-serializeable-fct> push \\ rot push emptystack \\ reduce push emptystack \\ concat push push emptystack push push \\ cat push \\ <non-serializeable-fct> push \\ char push \\ <non-serializeable-fct> push \\ get push emptystack \\ word push \\ when push emptystack \\ push push \\ <space> push push \\ empty? push \\ dup push \\ reverse push \\ pop push \\ pop push \\ reverse push \\ pop push \\ pop push \\ unword push push \\ unbracket-stk-repr push emptystack \\ tri* push \\ dup push \\ dup push push \\ tri@ push emptystack \\ curry push \\ curry push push \\ 2curry push emptystack \\ case push emptystack emptystack \\ word push \\ reverse push \\ push push \\ } push \\ \\ push \\ each push emptystack \\ push push \\ <space> push \\ push push \\ repr push push \\ swap push \\ push push \\ <space> push \\ push push \\ { push \\ \\ push emptystack push \\ unmap push push \\ map push emptystack \\ <fct> push \\ \\ push \\ drop push push \\ fct push emptystack \\ _|_ push emptystack \\ type push \\ unknown push push \\ repr-error push \\ \\ push push \\ :else push emptystack \\ nil push \\ \\ push \\ drop push push \\ nil push emptystack \\ word push \\ reverse push \\ push push \\ ] push \\ \\ push \\ each push emptystack \\ push push \\ <space> push \\ push push \\ repr push push \\ swap push \\ push push \\ <space> push \\ push push \\ [ push \\ \\ push emptystack push push \\ stk push emptystack push \\ wrd push mapping push \\ type push \\ dup push push \\ repr push emptystack \\ drop push \\ swap push push \\ nip push \\ <non-serializeable-fct> push \\ top push \\ <non-serializeable-fct> push \\ assoc push emptystack \\ char push \\ \\space push push \\ <space> push \\ <non-serializeable-fct> push \\ concat push \\ <non-serializeable-fct> push \\ undocument push emptystack \\ spit push \\ swap push \\ unbracket-stk-repr push \\ repr push \\ concat push emptystack \\ set-dict push \\ merge push \\ get-dict push push \\ serialize push \\ swap push push \\ dump push \\ <non-serializeable-fct> push \\ keys push emptystack \\ case push emptystack emptystack \\ look4) push \\ swap push \\ cons push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ look4) push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ swap push \\ reverse push \\ swap push \\ drop push push \\ ) push emptystack \\ _|_ push emptystack \\ effect push \\ stack push \\ incomplete push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ look4) push emptystack \\ -rot push \\ dup push \\ swap push push \\ over push emptystack \\ each push \\ dip push emptystack \\ 3zip push push \\ push push \\ unstack push \\ \\ push push \\ 3each push emptystack \\ t push \\ \\ push push \\ t push emptystack \\ curry push \\ curry push \\ curry push push \\ 3curry push emptystack \\ drop push \\ each push emptystack \\ keep push push push \\ cleave push emptystack \\ reduce push emptystack \\ or push push \\ f push \\ map push push \\ any? push emptystack \\ choose push \\ true push \\ false push push \\ not push \\ <non-serializeable-fct> push \\ swap push emptystack \\ call push \\ SPREAD push push \\ spread push emptystack \\ reduce push emptystack \\ if push emptystack \\ cons push \\ concat push \\ rot push emptystack \\ dip push push push emptystack \\ drop push push \\ empty? push \\ dup push \\ swap push push emptystack push push \\ SPREAD push emptystack \\ each push \\ dip push emptystack \\ zip push push \\ push push \\ unstack push \\ \\ push push \\ 2each push emptystack \\ top push \\ swap push \\ pop push \\ dup push push \\ unpush push emptystack \\ :else push \\ \\ push push \\ :else push emptystack \\ if-not push emptystack push push \\ unless push emptystack \\ tokenize push \\ uncomment push \\ undocument push \\ slurp push push \\ lload push \\ <non-serializeable-fct> push \\ current-time-millis push emptystack \\ run push \\ prelude-test.txt push \\ \\ push push \\ test-prelude push \\ <non-serializeable-fct> push \\ compose push emptystack \\ equal? push emptystack push push \\ empty? push emptystack \\ call push \\ dip push emptystack \\ 2dip push push push \\ 2bi* push emptystack \\ when push \\ curry push emptystack \\ loop push push \\ concat push \\ do push \\ swap push push \\ while push emptystack \\ push push \\ swap push push \\ cons push emptystack \\ 2bi* push \\ 2dip push emptystack \\ 4dip push push push \\ 2tri* push \\ <non-serializeable-fct> push \\ pop push emptystack \\ top push emptystack push push \\ nil push emptystack \\ <non-serializeable-fct> push push \\ call/cc push emptystack \\ rot push \\ rot push \\ swap push push \\ swapd push \\ <non-serializeable-fct> push \\ div push emptystack \\ call push \\ get push \\ get push emptystack push \\ over push \\ :else push push \\ case push emptystack \\ call/cc push emptystack \\ continue push emptystack \\ repl push \\ printer push push \\ drop push push push \\ abort push emptystack \\ if push emptystack \\ 2drop push push emptystack \\ call push push \\ over push push \\ when* push emptystack \\ each push emptystack push push \\ unstack push emptystack \\ repl push \\ printer push \\ evaluator push \\ reader push push \\ repl push \\ <non-serializeable-fct> push \\ drop push emptystack \\ flush push \\ print push \\ <newline> push \\ print push push \\ println push emptystack \\ call push push \\ evaluator push \\ <non-serializeable-fct> push \\ apply push emptystack \\ map push emptystack \\ cons push \\ unstack push push \\ zip push \\ zip push push \\ 3zip push emptystack \\ t push \\ \\ push push \\ true push \\ <non-serializeable-fct> push \\ mapping push emptystack \\ <non-serializeable-fct> push push \\ get-dict push emptystack \\ - push \\ swap push \\ current-time-millis push \\ dip push \\ swap push \\ current-time-millis push push \\ time push \\ <non-serializeable-fct> push \\ print push emptystack \\ if push emptystack \\ call push \\ 2nip push push emptystack \\ call push \\ drop push push \\ pick push push \\ if* push emptystack \\ map push emptystack \\ cons push \\ unstack push push \\ zip push \\ 3zip push push \\ 4zip push emptystack \\ set-ds push emptystack push push \\ clear push emptystack \\ run push \\ prelude.txt push \\ \\ push push \\ prelude push emptystack \\ over push \\ over push push \\ 2dup push \\ <non-serializeable-fct> push \\ - push emptystack \\ [a,b] push \\ - push \\ 1 push push \\ [a,b) push emptystack \\ unless push emptystack \\ drop push \\ rot push \\ stepcc push \\ -rot push \\ get-dict push push \\ empty? push \\ dup push push \\ step push emptystack \\ pick push \\ pick push \\ pick push push \\ 3dup push \\ <non-serializeable-fct> push \\ stepcc push \\ <non-serializeable-fct> push \\ equal? push emptystack \\ call push \\ load push push \\ run push emptystack \\ reduce push emptystack \\ + push push \\ 0 push push \\ sum push \\ <non-serializeable-fct> push \\ read-line push emptystack \\ call push \\ dip push emptystack \\ keep push \\ dip push emptystack \\ keep push push push push \\ tri push emptystack \\ set-dict push \\ dissoc push \\ get-dict push push \\ delete push emptystack \\ 2dip push \\ dup push push \\ do push emptystack \\ call push \\ concat push \\ push push \\ \\ push \\ \\ push \\ push push \\ rot push emptystack push push \\ dip push \\ <non-serializeable-fct> push \\ + push emptystack \\ map push \\ push push \\ unstack push \\ \\ push \\ dip push emptystack \\ zip push push push \\ 2map push emptystack \\ parse-quot push \\ when push emptystack \\ look4) push \\ pop push push \\ equal? push \\ ( push \\ \\ push \\ top push \\ dup push \\ swap push emptystack push \\ uncons push push \\ destruct-definition push \\ <non-serializeable-fct> push \\ word push emptystack \\ dip push emptystack \\ -rot push push \\ swap push push \\ -rot4 push emptystack \\ rot push \\ rot push push \\ -rot push \\ <non-serializeable-fct> push \\ identical? push emptystack \\ pop push \\ swap push \\ top push \\ dup push push \\ uncons push \\ <non-serializeable-fct> push \\ * push emptystack \\ dump push \\ bootimage.txt push \\ \\ push \\ bootstrapping-dict push push \\ bootimage push emptystack \\ map push \\ push push \\ unstack push \\ \\ push \\ dip push emptystack \\ 3zip push push push \\ 3map push emptystack \\ call/cc push emptystack \\ repl push \\ printer push \\ error push \\ \\ push push push \\ error push \\ <non-serializeable-fct> push \\ spit push emptystack \\ call/cc push emptystack \\ continue push \\ scan4] push push \\ ( push \\ \\ push push \\ ( push emptystack \\ 2bi* push \\ dup push push \\ 2bi@ push emptystack \\ 2tri* push \\ dup push \\ dup push push \\ 2tri@ push emptystack \\ 3drop push \\ each push emptystack \\ 3keep push push push \\ 3cleave push emptystack \\ <non-serializeable-fct> push push \\ continue push emptystack \\ push push \\ \\ push \\ \\ push \\ cons push push \\ curry push emptystack \\ call push \\ dip push emptystack \\ keep push push push \\ bi push emptystack \\ 2drop push \\ each push emptystack \\ 2keep push push push \\ 2cleave push emptystack \\ call/cc push emptystack \\ continue push \\ swap push \\ push push \\ dup push \\ swap push push push \\ get-ds push emptystack \\ case push emptystack emptystack \\ scan4[ push \\ rot push emptystack push \\ drop push push \\ } push emptystack \\ scan4[ push \\ rot push emptystack push \\ drop push push \\ ] push emptystack \\ scan4] push \\ swap push \\ push push \\ \\ push \\ \\ push \\ cons push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ scan4] push \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ { push emptystack \\ scan4] push \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ [ push emptystack \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ scan4[ push \\ rot push emptystack push \\ drop push push \\ ) push emptystack \\ scan4] push \\ scan4] push \\ swap push \\ cons push \\ rot push push \\ ( push emptystack \\ _|_ push emptystack \\ brackets push \\ unbalanced push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ scan4] push \\ <non-serializeable-fct> push \\ uncomment push emptystack \\ each push \\ swapd push push \\ reduce push emptystack \\ char push \\ \\newline push push \\ <newline> push emptystack \\ tokenize push \\ uncomment push \\ slurp push push \\ load push emptystack \\ def push \\ drop push \\ swap push push \\ def+ push emptystack \\ f push \\ \\ push push \\ f push emptystack \\ -rot4 push \\ dup push \\ rot push \\ -rot4 push \\ dup push \\ rot push push \\ 2over push emptystack \\ dip push \\ dip push emptystack \\ dup push push push \\ keep push emptystack \\ rot push \\ dup push \\ swap push push \\ dupd push emptystack \\ set-dict push \\ assoc push \\ get-dict push \\ swap push push \\ def push emptystack \\ reverse push \\ apply push \\ swap push emptystack push \\ func push \\ get-dict push push \\ fcall push \\ <non-serializeable-fct> push \\ flush push \\ <non-serializeable-fct> push \\ func push emptystack \\ when push \\ curry push emptystack \\ loop push push \\ keep push emptystack \\ call push push push \\ loop push emptystack \\ case push emptystack emptystack \\ scan4[ push \\ swap push \\ push push \\ \\ push \\ \\ push \\ cons push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ swap push \\ push push \\ mapping push \\ fcall push \\ swap push \\ drop push push \\ { push emptystack \\ swap push \\ push push \\ swap push \\ drop push push \\ [ push emptystack \\ scan4[ push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ swap push \\ push push \\ fcall push \\ swap push \\ drop push push \\ ( push emptystack \\ _|_ push emptystack \\ brackets push \\ unbalanced push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ scan4[ push emptystack \\ case push emptystack emptystack \\ scan4; push \\ swap push \\ cons push \\ push push \\ \\ push \\ \\ push \\ rot push \\ unpush push \\ drop push push \\ \\ push emptystack \\ reverse push \\ swap push \\ drop push push \\ ; push emptystack \\ scan4; push \\ swap push \\ cons push \\ rot push push \\ :else push emptystack \\ _|_ push emptystack \\ definition push \\ incomplete push push \\ syntax-error push \\ \\ push push emptystack top push mapping push \\ dup push \\ unpush push push \\ scan4; push \\ <non-serializeable-fct> push \\ spit-on push emptystack \\ filter push \\ concat push emptystack \\ not push push push \\ remove push emptystack \\ repl push \\ println push \\ word push \\ reverse push \\ pop push \\ reduce push emptystack \\ push push \\ <space> push \\ push push push emptystack push emptystack \\ Language push \\ Programming push \\ Concatenative push \\ A push \\ -- push \\ Consize push \\ is push \\ This push push push \\ say-hi push emptystack \\ if push \\ swap push push \\ if-not push emptystack \\ call push \\ reverse push \\ push push \\ ] push \\ \\ push \\ reverse push \\ push push \\ [ push \\ \\ push push \\ parse-quot push emptystack \\ choose push \\ dupd push push \\ or push \\ <non-serializeable-fct> push \\ unword push emptystack \\ f push \\ \\ push push \\ false push emptystack \\ call push \\ dip push emptystack \\ dip push push push \\ bi* push emptystack \\ tokenize push \\ uncomment push \\ word push \\ cons push \\ push push \\ <newline> push emptystack push \\ read-line push \\ flush push \\ print push \\ <space> push \\ print push \\ > push \\ \\ push push \\ reader push emptystack \\ nip push \\ nip push push \\ 2nip push emptystack \\ mapping push \\ cat push \\ zip push \\ map push emptystack \\ lookup push push \\ dup push \\ concat push emptystack \\ { push \\ ( push \\ [ push push emptystack \\ read-mapping push \\ read-word push \\ look4) push \\ scan4; push \\ : push \\ destruct-definition push \\ parse-quot push \\ scan4[ push \\ scan4] push \\ fcall push \\ call push \\ choose push \\ if push \\ when push \\ case push \\ SYMBOL: push \\ over push \\ -rot push \\ unpush push \\ uncons push \\ cons push \\ def+ push \\ def push push push \\ bootstrapping-dict push \\ <non-serializeable-fct> push \\ unmap push emptystack \\ if push emptystack \\ if push emptystack \\ if push \\ 2dip push emptystack \\ call push push \\ cons push \\ push push \\ cond push \\ \\ push emptystack push \\ uncons push push emptystack \\ call push \\ drop push push \\ empty? push \\ dup push \\ uncons push push emptystack \\ drop push push \\ empty? push \\ dup push push \\ cond push \\ <non-serializeable-fct> push \\ mod push \\ <non-serializeable-fct> push \\ reverse push emptystack \\ drop push \\ drop push \\ drop push push \\ 3drop push emptystack \\ call/cc push emptystack \\ continue push \\ concat push \\ swap push \\ push push \\ : push \\ \\ push \\ cons push \\ push push \\ \\ push \\ \\ push \\ cons push emptystack \\ ; push push \\ dup push \\ unpush push push push \\ SYMBOL: push emptystack \\ cons push push \\ swapu push emptystack \\ map push \\ cons push emptystack \\ get push \\ nil push push \\ swap push \\ keys push \\ dup push push \\ values push \\ <non-serializeable-fct> push \\ <= push emptystack \\ if push emptystack \\ cons push \\ zip push \\ swap push \\ -rot push \\ cons push \\ rot push \\ unpush push \\ rot push \\ cons push emptystack push \\ unpush push push emptystack emptystack push \\ 2drop push push \\ or push \\ bi@ push emptystack \\ empty? push push \\ 2dup push push \\ zip push \\ <non-serializeable-fct> push \\ integer? push emptystack \\ <non-serializeable-fct> push push \\ set-dict push emptystack \\ drop push \\ drop push push \\ 2drop push emptystack \\ if push emptystack \\ each push \\ 2dip push emptystack \\ call push push \\ over push \\ -rot push \\ unpush push push emptystack \\ 2drop push push \\ empty? push \\ dup push \\ swap push push \\ each push emptystack push \\ read-word push emptystack \\ 2drop push \\ while push emptystack \\ - push \\ 1 push \\ -rot push \\ push push \\ over push \\ rot push push emptystack \\ <= push \\ 2dup push push \\ -rot push emptystack push push \\ [a,b] push emptystack \\ dip push emptystack \\ -rot push push \\ dup push \\ rot push push \\ pick push emptystack \\ if push emptystack \\ + push \\ 1 push \\ size push \\ pop push push emptystack \\ 0 push \\ drop push push \\ empty? push \\ dup push push \\ size push \\ <non-serializeable-fct> push \\ == push emptystack \\ set-ds push \\ push push \\ reverse push \\ swap push \\ dip push emptystack \\ get-ds push \\ -serialize- push push \\ uncons push \\ dip push emptystack \\ clear push push \\ get-ds push push \\ serialize push mapping get-dict merge set-dict
")

	(spit "prelude-test.txt" "%%% Test Cases for the Prelude of Consize
%%% Copyright (c) 2013, Dominikus Herzberg, Heilbronn University
%%% New BSD License: http://opensource.org/licenses/BSD-3-Clause

( [ ] ) [ \\ read-word lookup ] unit-test
( [ ] ) [ \\ read-mapping lookup ] unit-test

[ ] [ x y 2drop ] unit-test
[ ] [ x y z 3drop ] unit-test
[ x y x y ] [ x y 2dup ] unit-test
[ x y z x y z ] [ x y z 3dup ] unit-test
[ x x y ] [ x y dupd ] unit-test
[ y x z ] [ x y z swapd ] unit-test
[ z x y ] [ x y z -rot ] unit-test
[ y z u x ] [ x y z u rot4 ] unit-test
[ u x y z ] [ x y z u -rot4 ] unit-test
[ x y x ] [ x y over ] unit-test
[ x y z x y ] [ x y z 2over ] unit-test
[ y ] [ x y nip ] unit-test
[ z ] [ x y z 2nip ] unit-test
[ x y z x ] [ x y z pick ] unit-test

[   [ x ] ] [ x [   ] cons ] unit-test
[ [ x y ] ] [ x [ y ] cons ] unit-test
[ x [   ] ] [   [ x ] uncons ] unit-test
[ x [ y ] ] [ [ x y ] uncons ] unit-test
[ [   ] x ] [   [ x ] unpush ] unit-test
[ [ y ] x ] [ [ x y ] unpush ] unit-test
( true  ) [ [   ] empty? ] unit-test
( false ) [ [ 1 ] empty? ] unit-test
( 0 ) [ [       ] size ] unit-test
( 3 ) [ [ x y z ] size ] unit-test

% if 'current-time-millis' is not supported, comment test case out
( 5 ) [ [ 2 3 + ] time drop ] unit-test % tests existence of 'time'

( [ ] top ) [ nil ] unit-test
( nil ) [ \\ Xg6Frd lookup ] unit-test
: Xg6Frd dummy ;
( [ dummy ] ) [ \\ Xg6Frd lookup ] unit-test
\\ Xg6Frd delete
( nil ) [ \\ Xg6Frd lookup ] unit-test
( ( 2 4 ) ) [ { 1 2 3 4 } values ] unit-test
( (     ) ) [ {         } values ] unit-test

( 4 5 ) [ 4 2 3 [ + ] call ] unit-test
( 4 2 3 ) [ 4 2 3 [ ] call ] unit-test
( [ 4 5 ] ) [ [ 4 2 3 + ] fcall ] unit-test
( [ ] ) [ [ ] fcall ] unit-test

( \\ t ) [ true  ] unit-test
( \\ f ) [ false ] unit-test

[ this ] [ true  this that choose ] unit-test % true
[ that ] [ false this that choose ] unit-test % false
[ this ] [ take  this that choose ] unit-test % word
[ this ] [ [ ]   this that choose ] unit-test % stack
[ this ] [ { }   this that choose ] unit-test % mapping
[ this ] [ \\ rot lookup this that choose ] unit-test % function
[ this ] [ nil   this that choose ] unit-test % nil

( true  ) [ true  true  and ] unit-test
( false ) [ true  false and ] unit-test
( false ) [ false true  and ] unit-test
( false ) [ false false and ] unit-test
( 7 ) [ t 7 and ] unit-test
( t ) [ 7 t and ] unit-test
( f ) [ f 7 and ] unit-test
( f ) [ 7 f and ] unit-test

( true  ) [ true  true  or ] unit-test
( true  ) [ true  false or ] unit-test
( true  ) [ false true  or ] unit-test
( false ) [ false false or ] unit-test
( 7 ) [ 7 t or ] unit-test
( t ) [ t 7 or ] unit-test
( 7 ) [ 7 f or ] unit-test
( 7 ) [ f 7 or ] unit-test

( false ) [ true  true  xor ] unit-test
( true  ) [ true  false xor ] unit-test
( true  ) [ false true  xor ] unit-test
( false ) [ false false xor ] unit-test
( f ) [ 7 8 xor ] unit-test
( 7 ) [ 7 f xor ] unit-test
( 7 ) [ f 7 xor ] unit-test
( f ) [ f f xor ] unit-test

( true  ) [ false not ] unit-test
( false ) [ true  not ] unit-test
( f ) [ 7 not ] unit-test

( 6 ) [ 5 true  [ 1 + ] [ 1 - ] if ] unit-test
( 6 ) [ 5 3     [ 1 + ] [ 1 - ] if ] unit-test
( 4 ) [ 5 false [ 1 + ] [ 1 - ] if ] unit-test
( 4 ) [ 5 true  [ 1 + ] [ 1 - ] if-not ] unit-test
( 4 ) [ 5 3     [ 1 + ] [ 1 - ] if-not ] unit-test
( 6 ) [ 5 false [ 1 + ] [ 1 - ] if-not ] unit-test
( 6 ) [ 5 true  [ 1 + ] when ] unit-test
( 6 ) [ 5 3     [ 1 + ] when ] unit-test
( 5 ) [ 5 false [ 1 + ] when ] unit-test
( 5 ) [ 5 true  [ 1 + ] unless ] unit-test
( 5 ) [ 5 3     [ 1 + ] unless ] unit-test
( 6 ) [ 5 false [ 1 + ] unless ] unit-test

( 7 ) [ 6     [ 1 + ] [ 0 ] if* ] unit-test
( 0 ) [ false [ 1 + ] [ 0 ] if* ] unit-test
( 7 ) [ 6     [ 1 + ]     when* ] unit-test
(   ) [ false [ 1 + ]     when* ] unit-test
( 5 6 ) [ 5 6     [ 1 - ] unless* ] unit-test
( 4   ) [ 5 false [ 1 - ] unless* ] unit-test

[ :else ] [ :else ] unit-test
[ yes ] [ 1 { 1 [ yes ] :else [ no ] } case ] unit-test
[ no  ] [ 2 { 1 [ yes ] :else [ no ] } case ] unit-test
[     ] [ 2 { 1 [ yes ]              } case ] unit-test

(  8 ) [ 7  ( [ dup 0 > ] [ 1 + ] [ dup 0 < ] [ 1 - ] [ ] ) cond ] unit-test
( -8 ) [ -7 ( [ dup 0 > ] [ 1 + ] [ dup 0 < ] [ 1 - ] [ ] ) cond ] unit-test
(  0 ) [ 0  ( [ dup 0 > ] [ 1 + ] [ dup 0 < ] [ 1 - ] [ ] ) cond ] unit-test

( [ x ] 1 ) [ [ ] x 1 [ push ] dip ] unit-test
( [ x ] 1 2 ) [ [ ] x 1 2 [ push ] 2dip ] unit-test
( [ x ] 1 2 3 ) [ [ ] x 1 2 3 [ push ] 3dip ] unit-test
( [ x ] 1 2 3 4 ) [ [ ] x 1 2 3 4 [ push ] 4dip ] unit-test
( 1 ) [ 1 [ ] dip ] unit-test
( 1 2 ) [ 1 2 [ ] 2dip ] unit-test
( 1 2 3 ) [ 1 2 3 [ ] 3dip ] unit-test
( 1 2 3 4 ) [ 1 2 3 4 [ ] 4dip ] unit-test

( [ 1 ] 1 ) [ [ ] 1 [ push ] keep ] unit-test
( 5 2 3 ) [ 2 3 [ + ] 2keep ] unit-test
( 24 2 3 4 ) [ 2 3 4 [ * * ] 3keep ] unit-test
( 1 1 ) [ 1 [ ] keep ] unit-test                % dup  == [ ] keep ;
( 1 2 1 2 ) [ 1 2 [ ] 2keep ] unit-test         % 2dup == [ ] 2keep ;
( 1 2 3 1 2 3 ) [ 1 2 3 [ ] 3keep ] unit-test   % 3dup == [ ] 3keep ;

( 4 2 ) [ 3 [ 1 + ] [ 1 - ] bi ] unit-test
( 4 3 ) [ 3 [ 1 + ] [     ] bi ] unit-test
( 3 2 ) [ 3 [     ] [ 1 - ] bi ] unit-test
( 3 dup ) [ 3 [     ] [     ] bi ] unit-test     % dup  == [ ] [ ] bi

( 5 1 )     [ 3 2 [ + ] [ - ] 2bi ] unit-test
( 5 3 2 )   [ 3 2 [ + ] [   ] 2bi ] unit-test
( 3 2 1 )   [ 3 2 [   ] [ - ] 2bi ] unit-test
( 3 2 2dup ) [ 3 2 [   ] [   ] 2bi ] unit-test   % 2dup == [ ] [ ] 2bi

( 6 2 ) [ 3 2 1 [ + + ] [ - - ] 3bi ] unit-test  % 3dup == [ ] [ ] 3bi

( 3 1 4 ) [ 2 [ 1 + ] [ 1 - ] [ 2 * ] tri ] unit-test
( 2 1 4 ) [ 2 [     ] [ 1 - ] [ 2 * ] tri ] unit-test
( 3 2 4 ) [ 2 [ 1 + ] [     ] [ 2 * ] tri ] unit-test
( 3 1 2 ) [ 2 [ 1 + ] [ 1 - ] [     ] tri ] unit-test
( 2 2 2 ) [ 2 [     ] [     ] [     ] tri ] unit-test

( 5 1 6 )   [ 3 2 [ + ] [ - ] [ * ] 2tri ] unit-test
( 3 2 1 6 ) [ 3 2 [   ] [ - ] [ * ] 2tri ] unit-test

( 9 3 24 ) [ 4 3 2 [ + + ] [ - - ] [ * * ] 3tri ] unit-test

% ( true ) [ 3 ( [ 1 + ] [ 1 - ] ) [ unstack bi ] [ cleave ] bi ] unit-test
( 4 2 ) [ 3 ( [ 1 + ] [ 1 - ] ) cleave ] unit-test  % like 'bi'
( 4 3 ) [ 3 ( [ 1 + ] [     ] ) cleave ] unit-test
( 3 2 ) [ 3 ( [     ] [ 1 - ] ) cleave ] unit-test
( 3 3 ) [ 3 ( [     ] [     ] ) cleave ] unit-test
( 4 ) [ 3 ( [ 1 + ] ) cleave ] unit-test
( 3 ) [ 3 ( [     ] ) cleave ] unit-test
(   ) [ 3 (         ) cleave ] unit-test

( 5 1 6 ) [ 3 2 ( [ + ] [ - ] [ * ] ) 2cleave ] unit-test
( 9 3 24 ) [ 4 3 2 ( [ + + ] [ - - ] [ * * ] ) 3cleave ] unit-test

( 3 9 )  [ 2 3 [ 1 + ] [ dup * ] bi* ] unit-test
( 3 12 ) [ 1 2 3 4 [ + ] [ * ] 2bi* ] unit-test
( 5 9 1 ) [ 4 3 2 [ 1 + ] [ dup * ] [ 1 - ] tri* ] unit-test
( 11 12 1 ) [ 6 5 4 3 2 1 [ + ] [ * ] [ - ] 2tri* ] unit-test

( 2 ) [ 1 ( [ 1 + ] ) spread ] unit-test
( 1 ) [ 1 ( [     ] ) spread ] unit-test
( 1 ) [ 1 (         ) spread ] unit-test
( 4 4 [ 1 + ] [ 1 - ] bi* ) [ 4 4 ( [ 1 + ] [ 1 - ] ) spread ] unit-test
( 5 3 25 ) [ 4 4 5 ( [ 1 + ] [ 1 - ] [ dup * ] ) spread ] unit-test
( 2 3 [ ] [ ] bi* ) [ 2 3 ( [ ] [ ] ) spread ] unit-test

( 4 9 ) [ 2 3 [ dup * ] bi@ ] unit-test
( 3 7 ) [ 1 2 3 4 [ + ] 2bi@ ] unit-test
( 4 9 16 ) [ 2 3 4 [ dup * ] tri@ ] unit-test
( 3 7 11 ) [ 1 2 3 4 5 6 [ + ] 2tri@ ] unit-test

( f ) [ 2 -3 [ 0 > ] both? ] unit-test
( t ) [ 2 -3 [ 0 > ] either? ] unit-test

% each, map, reduce

( 1 4 9 ) [ ( 1 2 3 ) [ dup * ] each ] unit-test
(       ) [ (       ) [ dup * ] each ] unit-test
( 1 2 3 ) [ ( 1 2 3 ) [       ] each ] unit-test
(       ) [ (       ) [       ] each ] unit-test
(     9 ) [ (     3 ) [ dup * ] each ] unit-test

( 1 2 3 ) [ ( 1 2 3 ) unstack ] unit-test
(       ) [ (       ) unstack ] unit-test
( 1     ) [ ( 1     ) unstack ] unit-test

( 5 7 9 ) [ ( 1 2 3 ) ( 4 5 6 ) [ + ] 2each ] unit-test
( 5     ) [ ( 1 2 3 ) ( 4     ) [ + ] 2each ] unit-test
(       ) [ (       ) ( 4 5 6 ) [ + ] 2each ] unit-test
(       ) [ (       ) (       ) [ + ] 2each ] unit-test

( 9 12 ) [ ( 1 2 ) ( 3 4 ) ( 5 6 ) [ + + ] 3each ] unit-test

( ( 1 4 9 ) ) [ ( 1 2 3 ) [ dup * ] map ] unit-test
( (       ) ) [ (       ) [ dup * ] map ] unit-test
( ( 1 2 3 ) ) [ ( 1 2 3 ) [       ] map ] unit-test
( (       ) ) [ (       ) [       ] map ] unit-test
( (     9 ) ) [ (     3 ) [ dup * ] map ] unit-test

% 'reduce' gets tested via 'sum' etc.

( 0 1 2 3 4 ) [ ( 1 2 3 4 ) 0 [ ] reduce ] unit-test
( 10 ) [ ( 1 2 3 4 ) sum ] unit-test
( 24 ) [ ( 1 2 3 4 ) prod ] unit-test
( ( 1 2 3 ) ) [ ( ( 1 ) ( 2 3 ) ) cat ] unit-test

( t ) [ ( 1 3 -4 5 0 7 2 ) [ 0 <= ] any? ] unit-test % there are two
( t ) [ ( 1 3 -4 5 0 7 2 ) [ 0 <  ] any? ] unit-test % there is one
( f ) [ ( 1 3  4 5 0 7 2 ) [ 0 <  ] any? ] unit-test % there is none

( t ) [ ( 1 3  4 5 0 7 2 ) [ 0 >= ] all? ] unit-test % all are true
( f ) [ ( 1 3  4 5 0 7 2 ) [ 0 >  ] all? ] unit-test % one is false
( f ) [ ( 1 3 -4 5 0 7 2 ) [ 0 >  ] all? ] unit-test % two are false


( ( 5 7 9 ) ) [ ( 1 2 3 ) ( 4 5 6 ) [ + ] 2map ] unit-test
( ( 5     ) ) [ ( 1 2 3 ) ( 4     ) [ + ] 2map ] unit-test
( (       ) ) [ (       ) ( 4 5 6 ) [ + ] 2map ] unit-test
( (       ) ) [ (       ) (       ) [ + ] 2map ] unit-test

( ( 9 12 ) ) [ ( 1 2 ) ( 3 4 ) ( 5 6 ) [ + + ] 3map ] unit-test

( 36 ) [ ( 1 2 3 ) ( 1 2 3 ) 1 [ * * ] 2reduce ] unit-test
(  6 ) [ ( 1 ) ( 2 ) ( 3 ) 1 [ * * * ] 3reduce ] unit-test

% zip, 3zip, 4zip

[ ( ) ] [ ( ) ( ) zip ] unit-test
[ ( ) ] [ ( 1 ) ( ) zip ] unit-test
[ ( ) ] [ ( ) ( 1 ) zip ] unit-test
[ ( ( 1 2 ) ) ] [ ( 1 ) ( 2 ) zip ] unit-test
[ ( ( 1 2 ) ( 3 4 ) ( 5 6 ) ) ] [ ( 1 3 5 ) ( 2 4 6 ) zip ] unit-test

( ( ) ) [ ( ) ( ) ( ) 3zip ] unit-test
( ( ) ) [ ( 1 ) ( ) ( 2 3 ) 3zip ] unit-test
( ( ) ) [ ( ) ( 2 3 ) ( 1 ) 3zip ] unit-test
( ( ) ) [ ( 2 3 ) ( 1 ) ( ) 3zip ] unit-test
( ( ( 1 3 5 ) ( 2 4 6 ) ) ) [ ( 1 2 ) ( 3 4 ) ( 5 6 ) 3zip ] unit-test

( ( ( 1 3 5 7 ) ( 2 4 6 8 ) ) )
  [ ( 1 2 ) ( 3 4 ) ( 5 6 ) ( 7 8 ) 4zip ] unit-test

% Looping Combinators

% 'do' is implicitly tested by 'while'
(  0 ) [ 7 [ 1 - dup 0 > ] loop ] unit-test
( 24 ) [ 1 4 [ [ * ] keep 1 - dup 0 > ] loop drop ] unit-test
( ( 1 2 3 4 5 6 ) prod ) % faculty function
      [ 6 1 [ over 0  > ] [ over * [ 1 - ] dip ] while nip ] unit-test
( 1 ) [ 0 1 [ over 0  > ] [ over * [ 1 - ] dip ] while nip ] unit-test
( ( 1 2 3 4 5 6 ) prod ) % faculty function
      [ 6 1 [ over 0 == ] [ over * [ 1 - ] dip ] until nip ] unit-test
( 1 ) [ 0 1 [ over 0 == ] [ over * [ 1 - ] dip ] until nip ] unit-test 

% tests for 'Y' implicitly test 'X'

( [ swap 1 + ] 2 ) [ 1 [ swap 1 + ] X ] unit-test % existence of 'X'  
( 24 ) [ 4 1 [ swap dup 0 equal? [ drop 1 ] when [ * ] keep 1 - swap ] Y nip ] unit-test
(  1 ) [ 0 1 [ swap dup 0 equal? [ drop 1 ] when [ * ] keep 1 - swap ] Y nip ] unit-test
(  1 ) [ 1 1 [ swap dup 0 equal? [ drop 1 ] when [ * ] keep 1 - swap ] Y nip ] unit-test
  
% Compositional Combinators

( 4 ) [ 3 1 [ + ] curry call ] unit-test
( 5 ) [ 1 2 3 [ + * ] 2curry call ] unit-test
( 14 ) [ 1 2 3 4 [ * + * ] 3curry call ] unit-test
")

)
